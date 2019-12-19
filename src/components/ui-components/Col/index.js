import React from "react";
import "./styles.scss";

const Col = props => {
  return (
    <div className={props.className ? `col ${props.className}` : "col"}>
      {props.children}
    </div>
  );
};

export default Col;
