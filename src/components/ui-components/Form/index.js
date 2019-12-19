import React from "react";
import "./styles.scss";

const Form = props => {
  return <div {...props}>{props.children}</div>;
};

export default Form;
