import React from "react";
import "./styles.scss";

const Container = props => {
  return (
    <div
      className={props.className ? `container ${props.className}` : "container"}
    >
      {props.children}
    </div>
  );
};

export default Container;
