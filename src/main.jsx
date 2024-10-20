import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Provider
import { CardInfoProvider } from "./hooks/useUpdateInfo.jsx";
import { SuccessProvider } from "./hooks/useSuccessfulSubmit.jsx";

createRoot(document.getElementById("root")).render(
  <CardInfoProvider>
    <SuccessProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SuccessProvider>
  </CardInfoProvider>
);
