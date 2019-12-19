import React from "react";
import "./styles.scss";

const Input = props => {
  return (
    <input className={props.className ? `input ${props.className}` : "input"} />
  );
};

export default Input;
