import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import "./css/1366x768.css";
import "./css/1280x1024.css";
import "./css/1280x800.css";
import "./css/1024x768.css";
import "./css/mobile.css";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
