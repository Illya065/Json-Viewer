import React from "react";
import "./style.css";

const Button = ({ title, onClick, marginBottom }) => {
  // FUNCTIONS
  const onButtonClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      style={{ marginBottom: marginBottom ? marginBottom : 0 }}
      className="button_text button"
      onClick={onButtonClick}
    >
      {title}
    </button>
  );
};

export default Button;
