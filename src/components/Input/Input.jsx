import React from "react";
import "./InputStyle.css";

export const INPUT_TYPE = {
  INPUT_TXT: "INPUT_TEXT",
  INPUT_PASSWORD: "INPUT_PASSWORD",
  INPUT_TXT_AREA: "INPUT_TXT_AREA",
};

const Input = ({ type, style, placeholder, onChangeCb }) => {
  const onChangeCallBackHandler = (event) => {
    let value = event.target.value;
    onChangeCb(value);
  };
  const getInputBasedOnType = (type, style, placeholder, onChangeCb) => {
    let inputJsx = null;
    switch (type) {
      case INPUT_TYPE.INPUT_TXT:
        inputJsx = (
          <input
            type="text"
            style={{ ...style }}
            placeholder={placeholder}
            onChange={onChangeCallBackHandler}
          />
        );
        break;

      case INPUT_TYPE.INPUT_PASSWORD:
        inputJsx = (
          <input
            type="password"
            style={{ ...style }}
            placeholder={placeholder}
            onChange={onChangeCallBackHandler}
          />
        );
        break;
      case INPUT_TYPE.INPUT_TXT_AREA:
        inputJsx = (
          <textarea
            style={{ ...style }}
            placeholder={placeholder}
            onChange={onChangeCallBackHandler}
            rows={4}
            cols={40}
          />
        );
        break;

      default:
        inputJsx = null;
    }
    return inputJsx;
  };
  return (
    <>
      <div className="input-container">
        {getInputBasedOnType(type, style, placeholder)}
      </div>
    </>
  );
};

export default Input;
