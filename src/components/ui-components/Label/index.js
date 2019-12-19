import React from "react";
import "./styles.scss";

const Label = props => {
  return <label {...props}>{props.children}</label>;
};

export default Label;
