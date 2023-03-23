import React from "react";
import "./ButtonStyles.css";

const Button = ({ text, onClickCb, style }) => {
  const onClickCbHandler = () => {
    if (!onClickCb) {
      throw Error("A button should contain a click call back function");
    }
    onClickCb();
  };
  return (
    <div>
      <button className="btn" style={{ ...style }} onClick={onClickCbHandler}>
        {text}
      </button>
    </div>
  );
};

export default Button;
