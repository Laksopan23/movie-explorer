// Shared state for favorites, demo authentication, and theme preferences.
// Preferences are persisted locally so they survive a browser refresh.
import React,{createContext,useContext,useEffect,useState}from"react";
const C=createContext(null);const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
export function AppProvider({children}){const[favorites,setFavorites]=useState(()=>read("movieFavorites",[])),[user,setUser]=useState(()=>read("movieUser",null)),[mode,setMode]=useState(()=>read("movieTheme","dark"));useEffect(()=>localStorage.setItem("movieFavorites",JSON.stringify(favorites)),[favorites]);useEffect(()=>localStorage.setItem("movieUser",JSON.stringify(user)),[user]);useEffect(()=>localStorage.setItem("movieTheme",JSON.stringify(mode)),[mode]);const toggleFavorite=m=>{if(!user)return;setFavorites(p=>p.some(x=>x.id===m.id)?p.filter(x=>x.id!==m.id):[...p,m])};return <C.Provider value={{favorites,toggleFavorite,isFavorite:id=>Boolean(user&&favorites.some(m=>m.id===id)),user,login:u=>setUser({username:u}),logout:()=>setUser(null),mode,toggleTheme:()=>setMode(m=>m==="dark"?"light":"dark")}}>{children}</C.Provider>};export function useApp(){const c=useContext(C);if(!c)throw Error("useApp must be used inside AppProvider");return c}



