import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Development from "./Development.jsx";
import Security from "./Security.jsx";
import Writeups from "./Components/Writeups/Writeups.jsx";
import Walkthrough from "./Components/Writeups/Walkthrough.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dev" element={<Development />} />
      <Route path="/sec" element={<Security />}>
        {/* <Route path="/writeups" element={<Writeups />} /> */}
      </Route>
        <Route path="/sec/writeups/:title" element={<Walkthrough />} />
    </Routes>
  </HashRouter>,
  // </React.StrictMode>
);
