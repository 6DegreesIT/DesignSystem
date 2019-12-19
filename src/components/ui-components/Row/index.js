import React from "react";
import "./styles.scss";

const Row = props => {
  return (
    <div className={props.className ? `row ${props.className}` : "row"}>
      {props.children}
    </div>
  );
};

export default Row;
