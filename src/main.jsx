import React, { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Development from "./Development.jsx";
import Security from "./Security.jsx";
import Writeups from "./Components/Writeups/Writeups.jsx";
import Walkthrough from "./Components/Writeups/Walkthrough.jsx";
import ThreeD from "./ThreeD.jsx";
import { supabase } from "./supabase";

function MainApp() {
  const [isSupabaseUsed, setIsSupabaseUsed] = useState(false);
  // Check if supabase is up and working, if not default to local data
  useLayoutEffect(() => {
    async function checkIsSupabaseUp() {
      const { data: prjData, error: prjError } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });
      if (prjError) {
        setIsSupabaseUsed(false)
      }
    }
    checkIsSupabaseUp();
  }, []);
  console.log(isSupabaseUsed)
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App  />} />
        <Route path="/dev" element={<Development isSupabaseUsed={isSupabaseUsed} />} />
        <Route path="/threeD" element={<ThreeD  />} />
        <Route path="/sec" element={<Security isSupabaseUsed={isSupabaseUsed} />}>
          {/* <Route path="/writeups" element={<Writeups />} /> */}
        </Route>
        <Route path="/sec/writeups/:title" element={<Walkthrough isSupabaseUsed={isSupabaseUsed} />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainApp />
  // </React.StrictMode>
,);
