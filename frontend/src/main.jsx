import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContextAPI from "./Components/ContextAPI/ContextAPI"; 
import LoginYourAcc from "./Components/Auth/LoginPages/LoginYourAcc";
import CreateAcc from "./Components/Auth/LoginPages/CreateAcc";
import ResetPassword from "./Components/Auth/LoginPages/ResetPassword";
import VerifyOTP from "./Components/Auth/LoginPages/VerifyOTP";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ContextAPI>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginYourAcc />} />
          <Route path="/signup" element={<CreateAcc />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </ContextAPI>
    </Router>
  </StrictMode>
);
