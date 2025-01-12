import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import app from 'App.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
