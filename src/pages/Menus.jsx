import React from "react";
import "./Responsive design/TabCard.css";
import "./Menu.css";
import '../pages/Responsive design/PhoneMenu.css'
import '../pages/Responsive design/TabMenu.css'
import Footer from "../components/Footer";
import MenuPart from "../components/MenuPart";
import burgers from "../components/BurgersInfo.jsx";
import MenuBg from "../assets/menu.png";
import { useState, useEffect } from "react";
import FadeInUp from "../components/FadeInUp";
function Menus() {
  return (
    <>
      =
      <FadeInUp>
        <img src={MenuBg} className="MenuBackground" alt="" />
      <MenuPart />
      <Footer />
      </FadeInUp>
    </>
  );
}

export default Menus;
