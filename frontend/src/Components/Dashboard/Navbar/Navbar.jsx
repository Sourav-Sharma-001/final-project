import React, { useContext } from "react";
import "./Navbar.css";
import { AppContext } from "../../ContextAPI/ContextAPI";

export default function Navbar() {
  const { currentPage } = useContext(AppContext);

  return (
    <>
      <div className="navbar">
        <div>{currentPage}</div>
        <input className="search-bar" placeholder="Search here..." />
      </div>
      <hr id="navbar-hr" />
    </>
  );
}
