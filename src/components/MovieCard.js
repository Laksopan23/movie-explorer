import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box, Chip, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, Star, CalendarMonth, Movie as MovieIcon } from "@mui/icons-material";
import { useApp } from "../context/AppContext";

export default function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite, user } = useApp();
  const navigate = useNavigate();
  const [failedPoster, setFailedPoster] = React.useState(null);
  const saved = isFavorite(movie.id);
  const handleFavorite = () => { if (!user) { navigate("/login"); return; } toggleFavorite(movie); };
  return <Card className="movie-card" sx={{ height: "100%", bgcolor: "background.paper", borderRadius: 3, overflow: "hidden" }}><Box sx={{ position: "relative" }}><Box component={RouterLink} to={`/movie/${movie.id}`} sx={{ display: "block" }}>{movie.poster && failedPoster !== movie.poster ? <CardMedia component="img" loading="lazy" onError={() => setFailedPoster(movie.poster)} image={movie.poster} alt={`${movie.title} poster`} sx={{ aspectRatio: "2 / 3", objectFit: "cover" }} /> : <Box sx={{ aspectRatio: "2 / 3", display: "flex", alignItems: "center", justifyContent: "center" }}><MovieIcon sx={{ fontSize: 60 }} /></Box>}</Box><Chip icon={<Star />} label={movie.rating} size="small" sx={{ position: "absolute", top: 12, left: 12, bgcolor: "#facc15", color: "#172033", pointerEvents: "none" }} /><IconButton aria-label={user ? (saved ? `Remove ${movie.title} from favorites` : `Add ${movie.title} to favorites`) : `Login to save ${movie.title}`} aria-pressed={saved} onClick={handleFavorite} sx={{ position: "absolute", top: 8, right: 8, bgcolor: "rgba(0,0,0,.7)", color: saved ? "#fb7185" : "white" }}>{saved ? <Favorite /> : <FavoriteBorder />}</IconButton></Box><CardContent><Typography component={RouterLink} to={`/movie/${movie.id}`} variant="h6" noWrap sx={{ display: "block", textDecoration: "none", color: "text.primary", fontWeight: 700 }}>{movie.title}</Typography><Box sx={{ display: "flex", gap: 1, mt: 1 }}><CalendarMonth fontSize="small" color="action" /><Typography color="text.secondary">{movie.year}</Typography></Box></CardContent></Card>;
}
