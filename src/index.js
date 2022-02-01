import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import "./css/2560x1440.css";
import "./css/1920x1200.css";
import "./css/1920x1080.css";
import "./css/1680x1050.css";
import "./css/1600x900.css";
import "./css/1536x864.css";
import "./css/1440x900.css";
import "./css/1366x768.css";
import "./css/1280x1024.css";
import "./css/1280x800.css";
import "./css/1280x720.css";
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
