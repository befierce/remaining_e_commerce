import React from "react";
import "./Container.css";

const Container = (props) => {
  return (
    <div className="container">
      <h1>{props.description}</h1>
    </div>
  );
};

export default Container;
