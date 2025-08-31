import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextAPI from "./Components/ContextAPI/ContextAPI"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ContextAPI>
        <Dashboard />
        <ToastContainer position="top-right" autoClose={3000} />
      </ContextAPI>
    </Router>
  </StrictMode>
);
