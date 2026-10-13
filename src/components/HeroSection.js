import React from "react";
import { Box, Container, Typography, TextField, Button, InputAdornment, Paper } from "@mui/material";
import { Search, Explore } from "@mui/icons-material";

function HeroSection({ search, setSearch, onSearch }) {
  const handleSubmit = (event) => { event.preventDefault(); onSearch(); };
  return <Box className="hero-section" sx={{ py: { xs: 7, md: 12 }, borderBottom: "1px solid #ffffff12", backgroundImage: 'linear-gradient(90deg, rgba(9,15,29,.97), rgba(9,15,29,.75)), url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba")', backgroundSize: "cover", backgroundPosition: "center", color: "white" }}>
    <Container maxWidth="lg"><Box sx={{ maxWidth: 720 }}>
      <Typography className="hero-eyebrow" sx={{ color: "#fb7185", fontWeight: 700, letterSpacing: 2, mb: 2, fontSize: 13 }}>YOUR CINEMA STARTS HERE</Typography>
      <Typography className="hero-title" variant="h2" sx={{ fontSize: { xs: 42, sm: 62, md: 78 }, fontWeight: 900, lineHeight: 1.15, mb: 3 }}>Find your next <Box component="span" sx={{ color: "#fb7185" }}>great story.</Box></Typography>
      <Typography className="hero-copy" sx={{ color: "#cbd5e1", fontSize: { xs: 15, md: 18 }, mb: 4 }}>Explore extraordinary stories, timeless classics, and unforgettable cinema.</Typography>
      <Paper className="hero-search" component="form" onSubmit={handleSubmit} sx={{ p: 1.5, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "stretch", boxShadow: "0 16px 50px #00000040", border: "1px solid", borderColor: "divider", gap: 1, borderRadius: 3 }}>
        <TextField fullWidth variant="standard" placeholder="Search for movies..." value={search} onChange={(e) => setSearch(e.target.value)} slotProps={{ htmlInput: { "aria-label": "Search movies by title" }, input: { disableUnderline: true, startAdornment: <InputAdornment position="start"><Search /></InputAdornment> } }} sx={{ px: 2, py: 1, minWidth: 0 }} />
        <Button type="submit" variant="contained" startIcon={<Explore />} sx={{ px: { xs: 2, md: 4 }, py: 1.5, whiteSpace: "nowrap" }}>Search</Button>
      </Paper>
    </Box></Container>
  </Box>;
}
export default HeroSection;
