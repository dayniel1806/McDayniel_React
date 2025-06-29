import React from "react";
import Card from "./Cards";
import "./MenuPart.css";
import burgers from "./BurgersInfo.jsx";
import { Link } from "react-router-dom";

const staticPrice = "$12.30";


const MenuPart = ({ limit }) => {
  const itemsToShow = limit ? burgers.slice(0, limit) : burgers;
  return (
    <>
      <div className="CardRow">
        {itemsToShow.map((burger, index) => (
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
export default MenuPart;
