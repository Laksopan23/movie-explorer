import React from "react";
import { Box, Container, Typography, TextField, Button, InputAdornment, Paper } from "@mui/material";
import { Search, Explore } from "@mui/icons-material";

function HeroSection({ search, setSearch, onSearch }) {
  const handleSubmit = (event) => { event.preventDefault(); onSearch(); };
  return <Box sx={{ py: { xs: 9, md: 14 }, backgroundImage: 'linear-gradient(90deg, rgba(9,15,29,.97), rgba(9,15,29,.75)), url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba")', backgroundSize: "cover", backgroundPosition: "center", color: "white" }}>
    <Container maxWidth="lg"><Box sx={{ maxWidth: 720 }}>
      <Typography sx={{ color: "#fb7185", fontWeight: 700, letterSpacing: 2, mb: 2, fontSize: 13 }}>YOUR CINEMA STARTS HERE</Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: 38, sm: 52, md: 64 }, fontWeight: 900, lineHeight: 1.15, mb: 3 }}>Discover Your Next <Box component="span" sx={{ color: "#fb7185" }}>Favorite Movie.</Box></Typography>
      <Typography sx={{ color: "#cbd5e1", fontSize: { xs: 15, md: 18 }, mb: 4 }}>Explore extraordinary stories, timeless classics, and unforgettable cinema.</Typography>
      <Paper component="form" onSubmit={handleSubmit} sx={{ p: 1, display: "flex", alignItems: "center", gap: 1, borderRadius: 3 }}>
        <TextField fullWidth variant="standard" placeholder="Search for movies..." value={search} onChange={(e) => setSearch(e.target.value)} slotProps={{ input: { disableUnderline: true, startAdornment: <InputAdornment position="start"><Search /></InputAdornment> } }} sx={{ px: 2 }} />
        <Button type="submit" variant="contained" startIcon={<Explore />} sx={{ px: { xs: 2, md: 4 }, py: 1.5, whiteSpace: "nowrap" }}>Search</Button>
      </Paper>
    </Box></Container>
  </Box>;
}
export default HeroSection;
