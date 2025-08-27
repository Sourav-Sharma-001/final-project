import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div>Home</div>
        <input className="search-bar" placeholder="Search here..." />
      </div>
      <hr id="navbar-hr"/>
    </>
  );
}
