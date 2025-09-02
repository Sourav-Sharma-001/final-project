import React, { useState } from "react";
import "./LoginYourAcc.css";
import logo from "../../../../../Images/frame.png";
import frame from "../../../../../Images/frame2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function LoginYourAcc() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://your-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Login successful ✅");
        navigate("/"); // Redirect to Home.jsx
      } else {
        toast.error(data.message || "Invalid credentials ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Sign in to your account</h2>
            <p className="form-subtitle">
              Welcome back! Please enter your details.
            </p>

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <div className="forgot-password">
              <a onClick={() => navigate("/forgot-password")}>
                Forgot password?
              </a>
            </div>

            <button type="submit">Sign in</button>

            <div className="signup-link">
              <span>Don’t have an account? </span>
              <a onClick={() => navigate("/signup")}>Sign up</a>
            </div>
          </form>
        </div>
      </div>

      <div className="right">
        <div className="right-container">
          <div className="text-logo-container">
            <div className="text-container">
              <h1>Welcome to</h1>
              <h1>Company Name</h1>
            </div>
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="frame-container">
            <img src={frame} alt="frame" />
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
