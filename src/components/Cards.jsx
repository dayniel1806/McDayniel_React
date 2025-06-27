import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, content, name, price }) => {
  return (
    <>
      <div className="Card">
        <div className="CardInfo">
          <span> {name} </span>
          <span> {price} </span>
        </div>
        <div className="CardImage">
          <img src={image} alt="Picture Part" className="CardPicture" />
        </div>
        <div className="CardContent">
          <p>{content}</p>
        </div>
        <div className="CardOrder">
          <Link to="/order">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
