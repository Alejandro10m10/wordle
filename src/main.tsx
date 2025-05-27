import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./styles.css";

import { ThemeProvider } from "./theme";
import { WordleApp } from "./WordleApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <WordleApp />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
