import React from "react";
import Card from "../components/Cards";
import pic from "../assets/otherBurger.png";
import "./Menu.css";

const Menu = () => {
  const staticPrice = "$12.30";
  return (
    <>
      <div id="menu_header">
        <h2>TASTY MENU</h2>
      </div>
      <div className="menuBars">
         <Card
        image={pic}
        price={staticPrice}
        name="50/50 BURGERS"
        content="With 50% of bacon and 50% beef, it is what you need to satisfy your burger cravings. There is a 100% chance you will love this burger"
      />
      <Card />
      <Card />
      </div>
    </>
  );
};
export default Menu;
