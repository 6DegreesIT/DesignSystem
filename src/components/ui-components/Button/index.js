import React from "react";
import "./styles.scss";

const Button = props => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
