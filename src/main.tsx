import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router";

import "./styles.css";

import { WordleApp } from "./WordleApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WordleApp />
    </BrowserRouter>
  </StrictMode>
);
