import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode) => createTheme({
  palette: { mode, primary: { main: "#e11d48" }, background: { default: mode === "dark" ? "#090f1d" : "#f8fafc", paper: mode === "dark" ? "#111827" : "#ffffff" } },
  typography: { fontFamily: "'Inter', 'Roboto', sans-serif", h3: { fontWeight: 800 }, h5: { fontWeight: 700 } },
  shape: { borderRadius: 12 },
});
