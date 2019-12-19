import React from "react";
import "./styles.scss";

const Card = props => {
  return (
    <div className={props.className ? `card ${props.className}` : "card"}>
      {props.children}
    </div>
  );
};

export default Card;
