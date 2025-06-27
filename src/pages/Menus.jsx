import React from "react";
import Card from "../components/Cards";
import "./Menu.css";
import burgers from "../components/BurgersInfo.jsx";




const Menu = () => {
  const staticPrice = "$12.30";
  return (
    <>
      <div id="menu_header">
        <h2>TASTY MENU</h2>
      </div>
      <div className="CardRow">


        {burgers.map((burger, index) => (
          <div key={index}>
            <Card
              name={burger.name}
              price={burger.price}
              content={burger.content}
              image={burger.image}
              alt={burger.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Menu;
