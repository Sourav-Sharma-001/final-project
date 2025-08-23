import React, { useState } from "react";
import "./EmailOTP.css";
import frame from "../../../../Images/frame3.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmailOTP() {
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "OTP sent successfully ✅");
      } else {
        toast.error(data.message || "Failed to send OTP ❌");
      }
    } catch {
      toast.error("Server error ❌");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOtp();
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Company name</h2>
            <p className="form-subtitle">Please enter your registered email ID to recieve an OTP.</p>
            <label>E-mail</label>
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
