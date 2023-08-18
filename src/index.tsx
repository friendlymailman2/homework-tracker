import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f66d4",
    },
    background: {
      default: "#272727",
    },
    mode: "dark",
  },
  typography: {
    h1: { fontSize: "3rem", fontWeight: "bold" },
    h2: { fontSize: "3rem", fontWeight: "500" },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
