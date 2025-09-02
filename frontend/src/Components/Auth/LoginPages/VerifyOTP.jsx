import React, { useState } from "react";
import "./VerifyOTP.css";
import frame from "./Images/frame4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [otp, setOtp] = useState("");

  const verifyOTP = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits ❌");
      return;
    }

    try {
      const res = await fetch("https://your-backend.onrender.com/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "OTP verified successfully ✅");
        setTimeout(
          () => navigate("/reset-password", { state: { email, otp } }),
          2000
        );
      } else {
        toast.error(data.message || "Invalid OTP ❌");
      }
    } catch {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={verifyOTP} className="otp-form">
            <h2>Enter your OTP</h2>
            <p className="form-subtitle">
              We've sent the 6-digit OTP to your registered email.
            </p>

            <label>OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength="6"
              required
            />

            <button type="submit">Verify</button>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="right-container">
          <img src={frame} alt="frame" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
