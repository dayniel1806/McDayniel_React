import Logo from "../assets/LOOOKL.png";
import Linked from "./Linked";
import "./Nav.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav_bar">
      <div id="nav_left">
        <img src={Logo} id="nav_logo" />
        <p id="logo">McDayniel's</p>
      </div>
      <Linked />
    </nav>
  );
}

export default Nav;
