import React from "react";
import Card from "../components/Cards";
import pic1 from "../assets/50_50-removebg-preview.jpg";
import pic2 from "../assets/Donut-Burger.png";
import pic3 from "../assets/Cheeseburger.png";
import "./Menu.css";
const Menu = () => {
  const staticPrice = "$12.30";
  return (
    <>
      <div id="menu_header">
        <h2>TASTY MENU</h2>
      </div>
      <div className="menuBars">
         {/* <Card
        image={pic1}
        price={staticPrice}
        name="50/50 BURGERS"
        content="With 50% of bacon and 50% beef, it is what you need to satisfy your burger cravings. There is a 100% chance you will love this burger"
      /> */}
      {/* <Card image={pic2} price={staticPrice} name="Donut Burger" content="The Donut burger features a beef patty, bacon, and cheese sandwiched between two glazed donuts, resulting in a sweet savory combination." />
      <Card image={pic3} price={staticPrice} name= "Chicken Burger" content= "Whether made with ground chicken or whole chicken breast, the Chicken burger, caters to various tastes and preferences" /> */}
      <Card />
      </div>
    </>
  );
};
export default Menu;
