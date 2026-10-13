// Global navigation, theme control, favorite access, and confirmed logout live here.
import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Badge, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { MovieFilter, Brightness4, Brightness7, FavoriteBorder, Login as LoginIcon, Logout } from "@mui/icons-material";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { mode, toggleTheme, favorites, user, logout } = useApp();
  const { pathname } = useLocation();
  const [logoutOpen, setLogoutOpen] = useState(false);
  const confirmLogout = () => { logout(); setLogoutOpen(false); };
  return <>
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.paper", color: "text.primary", borderBottom: "1px solid", borderColor: "divider" }}>
      <Container maxWidth="lg"><Toolbar disableGutters sx={{ gap: { xs: 0.5, sm: 1.5 }, minHeight: { xs: 64, sm: 80 } }}>
        <MovieFilter color="primary" />
        <Typography component={RouterLink} to="/" sx={{ flexGrow: 1, fontWeight: 900, fontSize: { xs: 12, sm: 17 }, letterSpacing: "-0.03em", textDecoration: "none", color: "text.primary" }}>MOVIE<Box component="span" sx={{ color: "primary.main" }}>EXPLORER</Box></Typography>
        <Button component={RouterLink} to="/" color={pathname === "/" ? "primary" : "inherit"} sx={{ display: { xs: "none", sm: "inline-flex" } }}>Home</Button>
        <Tooltip title={user ? "Favorites" : "Log in to view favorites"}><IconButton component={RouterLink} to={user ? "/favorites" : "/login"} aria-label={user ? "View favorites" : "Log in to view favorites"} color={pathname === "/favorites" ? "primary" : "inherit"}><Badge badgeContent={user ? favorites.length : 0} color="primary"><FavoriteBorder /></Badge></IconButton></Tooltip>
        <IconButton color="inherit" aria-label="Toggle theme" onClick={toggleTheme}>{mode === "dark" ? <Brightness7 /> : <Brightness4 />}</IconButton>
        {user ? <><Typography variant="body2" sx={{ display: { xs: "none", md: "block" }, maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis" }}>Hi, {user.username}</Typography><Tooltip title="Logout"><IconButton aria-label="Logout" onClick={() => setLogoutOpen(true)} color="inherit"><Logout /></IconButton></Tooltip></> : <Button component={RouterLink} to="/login" variant="contained" size="small" sx={{ minWidth: 0, px: { xs: 1, sm: 2 } }} startIcon={<LoginIcon />}>Login</Button>}
      </Toolbar></Container>
    </AppBar>
    <Dialog open={logoutOpen} onClose={() => setLogoutOpen(false)} aria-labelledby="logout-dialog-title">
      <DialogTitle id="logout-dialog-title">Log out of Movie Explorer?</DialogTitle>
      <DialogContent>Your saved favorites and theme settings will remain on this device.</DialogContent>
      <DialogActions><Button onClick={() => setLogoutOpen(false)}>Cancel</Button><Button onClick={confirmLogout} color="primary" variant="contained">Log out</Button></DialogActions>
    </Dialog>
  </>;
}



