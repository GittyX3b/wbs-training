import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "@/App.jsx";
import { PokeDataProvider } from "@context";

import "@/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokeDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PokeDataProvider>
  </StrictMode>
);
