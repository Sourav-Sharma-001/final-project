import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextAPI from "./Components/ContextAPI/ContextAPI"; 
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ContextAPI>
        <Dashboard />
      </ContextAPI>
    </Router>
  </StrictMode>
);
