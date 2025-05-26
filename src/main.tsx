import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { WordleApp } from "./WordleApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WordleApp />
  </StrictMode>
);
