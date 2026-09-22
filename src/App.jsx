import Development from "./Development";
import { useState } from "react";
import Security from "./Security";
import "./App.css";
function App() {
  const [pageWanted, setPagedWanted] = useState("");
  if (pageWanted == "SEC") {
    return <Security setPagedWanted={setPagedWanted} />;
  } else if (pageWanted == "DEV") {
    return <Development setPagedWanted={setPagedWanted} />;
  }
  return (
    <div className="split-container">
      <div className="split-side security" onClick={() => setPagedWanted("SEC")}>
        <h1 className="split-title">Security</h1>
        <p className="split-subtitle">Protect and Secure Assets</p>
      </div>

      <div className="split-side development" onClick={() => setPagedWanted("DEV")}>
        <h1 className="split-title">Development</h1>
        <p className="split-subtitle">Build and Deploy Applications</p>
      </div>
    </div>
  );
}

export default App;
