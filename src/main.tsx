import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/routes";
import "@/styles/index.css";
import { ThemeProvider } from "./utils/contexts/theme";
import { TokenProvider } from "./utils/contexts/token";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <ThemeProvider>
      <React.StrictMode>
        <App />
        <Toaster />
      </React.StrictMode>
    </ThemeProvider>
  </TokenProvider>
);
