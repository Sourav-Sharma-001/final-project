import React, { useState } from "react";
import "./Settings.css";
import Navbar from "../Navbar/Navbar";
import SettingsForm from "./SettingsForm/SettingsForm";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-text">
        <div>Settings</div>
      </div>
      <hr/>
      <div className="settings-form-container">
        <SettingsForm />
      </div>
    </div>
  );
}
