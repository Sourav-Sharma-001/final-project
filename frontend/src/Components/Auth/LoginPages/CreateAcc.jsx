import React, { useState } from "react";
import "./CreateAcc.css";
import logo from "../../../../../Images/frame.png";
import frame from "../../../../../Images/frame2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CreateAcc() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createAcc = async () => {
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters ❌");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Account created successfully ✅");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(data.message || "Failed to create account ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAcc();
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Create your account</h2>
            <p className="form-subtitle">
              Join us today! Please fill in your details.
            </p>

            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />

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

            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />

            <button type="submit">Sign Up</button>
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
      <ToastContainer />
    </div>
  );
}
