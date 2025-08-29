import React, { useState } from "react";
import "./VerifyOTP.css";
import frame from "../../../../Images/frame4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");

  const verifyOTP = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "OTP verified successfully ✅");
      } else {
        toast.error(data.message || "Invalid OTP ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={verifyOTP} className="otp-form">
            <h2>Enter your OTP</h2>
            <p className="form-subtitle">We've sent the 6-digit OTP to your registered mail.</p>
            <p className="form-subtitle">Please enter it below to sign in.</p>

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
