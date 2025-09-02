import React, { useState } from "react";
import "./ResetPassword.css";
import frame from "../../../../../Images/frame5.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const { email, otp } = location.state || {};
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();

    if (!email || !otp) {
      toast.error("Email or OTP missing. Please try again ❌");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters ❌");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const res = await fetch("https://your-backend.onrender.com/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword: password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Password reset successfully ✅");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(data.message || "Failed to reset password ❌");
      }
    } catch (err) {
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-parent">
      <div className="left">
        <div className="form-container">
          <form onSubmit={resetPassword} className="reset-form">
            <h2>Create New Password</h2>
            <div className="form-subtitle">
              Today is new day. It's your day. You shape it.
            </div>
            <div className="form-subtitle2">
              Sign in to start managing your project.
            </div>

            <label>New Password</label>
            <div className="input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
              <span className="icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
              <span className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button type="submit">Reset Password</button>
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
