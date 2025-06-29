import React from "react";
import "./Menu.css";
import Footer from "../components/Footer";
import MenuPart from "../components/MenuPart"
import burgers from "../components/BurgersInfo.jsx";
function Menus() {
  return (
    <> 
    <div id="menu_header">
        <h2>TASTY MENU</h2>
      </div>
      <MenuPart />
      <Footer />
    </>
  );
}

export default Menus;
