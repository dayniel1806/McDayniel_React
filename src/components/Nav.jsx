import Logo from "../assets/LOOOKL.png";
import Linked from "./Linked";
import "./Nav.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} className="logo-img" alt="" />

          <span>McDayniel's</span>
        </div>
        <Linked />
        <div className="hamburger" onClick={toggleSidebar}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <Link to="/" className="closebtn" onClick={toggleSidebar}>
          <ion-icon name="close-outline"></ion-icon>
        </Link>
        <Link to="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="/menus" onClick={toggleSidebar}>
          Menu
        </Link>
        <Link to="/ourStory" onClick={toggleSidebar}>
          Our Story
        </Link>
        <Link to="/order" className="order-btn" onClick={toggleSidebar}>
          ORDER NOW
        </Link>
      </div>
    </>
  );
};

export default Navbar;
