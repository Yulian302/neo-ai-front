import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./user/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/util/swipe";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
reportWebVitals();
