import React, { useState } from "react";
import "./ResetPassword.css";
import frame from "../../../../../Images/frame5.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "OTP sent to your email ✅");
        // Redirect to OTP verification page with email
        setTimeout(() => navigate("/verify-otp", { state: { email } }), 2000);
      } else {
        toast.error(data.message || "Failed to send OTP ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={sendOTP} className="forgot-form">
            <h2>Forgot Password</h2>
            <p className="form-subtitle">
              Enter your registered email to receive OTP.
            </p>

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <button type="submit">Send OTP</button>
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
