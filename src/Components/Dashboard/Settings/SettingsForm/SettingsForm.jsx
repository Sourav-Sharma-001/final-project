import React, { useState } from "react";
import "./SettingsForm.css";

export default function SettingsForm() {
  const [formData, setFormData] = useState({
    firstName: "Sourav",
    lastName: "Sharma",
    email: "sourav@gmail.com",
    password: "**********",
    confirmPassword: "**********",
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [accounts, setAccounts] = useState([
    { email: "example1@gmail.com" },
    { email: "example2@gmail.com" }
  ]);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const handleDelete = (index) => {
    const updated = [...accounts];
    updated.splice(index, 1);
    setAccounts(updated);
    setDropdownIndex(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Implement actual logout functionality here
  };

  return (
    <div className="settings-container">
      <div className="settings-box">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => handleTabChange("profile")}
          >
            Edit Profile
          </button>
          <button 
            className={`tab ${activeTab === "account" ? "active" : ""}`}
            onClick={() => handleTabChange("account")}
          >
            Account management
          </button>
        </div>

        {activeTab === "profile" && (
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        )}

        {activeTab === "account" && (
          <div className="account-management">
            <div className="account-item">
              <label>Identity Verification</label>
              <p className="status verified">Verified</p>
            </div>
            <div className="account-list-section">
              <label>Add Accounts</label>
              {accounts.map((account, index) => (
                <div className="account-row" key={index}>
                  <div className="account-avatar" />
                  <div className="account-email">{account.email}</div>
                  <div className="account-actions">
                    <button
                      className="dropdown-toggle"
                      onClick={() => toggleDropdown(index)}
                    >
                      &#x25BC;
                    </button>
                    {dropdownIndex === index && (
                      <div className="dropdown-menu">
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(index)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="logout-btn-container">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
