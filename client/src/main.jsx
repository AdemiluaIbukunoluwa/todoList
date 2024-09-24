import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SignInProvider } from "./Context/signin.context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SignInProvider>
        <App />
      </SignInProvider>
    </BrowserRouter>
  </StrictMode>
);
