import React from "react";
import "./Menu.css";
import Footer from "../components/Footer";
import MenuPart from "../components/MenuPart";
import burgers from "../components/BurgersInfo.jsx";
import MenuBg from "../assets/menu.png";
import { useState, useEffect } from "react";
import FadeInUp from "../components/FadeInUp";
function Menus() {
  return (
    <>=
        <FadeInUp>
          <img src={MenuBg} className="MenuBackground" alt="" />
        </FadeInUp>
        <MenuPart />
        <Footer />
    </>
  );
}

export default Menus;
