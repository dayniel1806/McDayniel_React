import React from "react";
import "./Card.css";

const Card = ({ image, content, name, price }) => {
  return (
    <>
      <div className="card">
        <div className="CardText">
          <h3>{name}</h3>
          <h3> {price} </h3>
        </div>
        <img src={image} alt="" />
        <div className="CardTextMoreInfo">
          <p>{content}</p>
          <div className="CardDivButtons">
            <button className="CardOrderButtons">
              <a href="#">Order Now</a>
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default Card;
