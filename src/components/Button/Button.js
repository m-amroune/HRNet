import React from "react";
import style from "./style.module.css";
import PropTypes from "prop-types";

// Component to display form button

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

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
