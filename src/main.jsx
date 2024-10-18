import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Provider
import { CardInfoProvider } from "./hooks/useUpdateInfo.jsx";

createRoot(document.getElementById("root")).render(
  <CardInfoProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CardInfoProvider>
);
