import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Development from "./Development.jsx";
import Security from "./Security.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dev" element={<Development />} />
      <Route path="/sec" element={<Security />} />
    </Routes>
  </HashRouter>,
  // </React.StrictMode>
);
