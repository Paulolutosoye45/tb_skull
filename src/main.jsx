import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
  </StrictMode>
);
// 45d1d372-2aee-4d5e-9f3c-87c050b0f2d5
