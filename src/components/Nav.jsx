import Logo from "../assets/LOOOKL.png";
import Linked from "./Linked";
import "../pages/Responsive design/PhoneNav.css";
import "./Nav.css";
// import "../pages/Responsive design/PhoneNav.css";
import "../pages/Responsive design/TabNav.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="PhoneNavDiv">
        <nav className="phoneNav">
          <ion-icon name="menu-outline" class="NavMenuBtn"></ion-icon>
          <img src={Logo} id="nav_logo" />
          <p id="logo">McDayniel's</p>
        </nav>
      </div>

      <nav id="nav_bar">
        <div id="nav_left">
          <img src={Logo} id="nav_logo" />
          <p id="logo">McDayniel's</p>
        </div>
        <Linked />
      </nav>
    </>
  );
}

export default Nav;
