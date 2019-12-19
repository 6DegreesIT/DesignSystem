import React from "react";
import "./styles.scss";

const Textarea = props => {
  return (
    <textarea
      className={props.className ? `input ${props.className}` : "input"}
    />
  );
};

export default Textarea;
