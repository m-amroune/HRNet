import React from "react";
import style from "./style.module.css";

const Button = ({ type = "submit", variant = "save", children, onClick }) => {
  return (
    <button
      className={`${style.button} ${style[variant]}  `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
