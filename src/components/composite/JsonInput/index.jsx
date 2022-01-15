import React from "react";
import "./style.css";

const JsonInput = ({ inputValue, setInputValue }) => {
  // FUNCTIONS
  const inputTextChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <textarea
      onChange={inputTextChangeHandler}
      type="text"
      className="json-input"
      value={inputValue}
    ></textarea>
  );
};

export default JsonInput;
