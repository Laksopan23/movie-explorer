import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: mode === "dark" ? "#fb7185" : "#be123c", contrastText: mode === "dark" ? "#18101a" : "#ffffff" },
    background: { default: mode === "dark" ? "#0b101b" : "#f4f5f8", paper: mode === "dark" ? "#141c2b" : "#ffffff" },
    text: { primary: mode === "dark" ? "#f3f5fa" : "#172033", secondary: mode === "dark" ? "#a6b2c6" : "#58657a" },
    divider: mode === "dark" ? "#ffffff14" : "#17203314",
  },
  typography: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    h2: { fontWeight: 800, letterSpacing: "-0.045em" },
    h3: { fontWeight: 800, letterSpacing: "-0.035em", fontSize: "clamp(1.8rem, 4vw, 3rem)" },
    h4: { fontWeight: 800, letterSpacing: "-0.025em", fontSize: "clamp(1.5rem, 3vw, 2.1rem)" },
    h5: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 10, padding: "10px 20px" } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiCard: { styleOverrides: { root: { border: "1px solid", borderColor: mode === "dark" ? "#ffffff12" : "#17203310", boxShadow: "0 8px 30px #00000008" } } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 10 } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
    MuiCssBaseline: { styleOverrides: { body: { transition: "background-color 180ms ease" }, "::selection": { background: "#fb718555" } } },
  },
});
