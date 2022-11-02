import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/404";

function App() {
  const theme = createTheme({});
  // const theme = createTheme({palette: {mode: 'dark'}});

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
  );
}

export default App;
