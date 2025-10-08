// src/components/shared/Button.jsx
import React from "react";

const Button = ({
  type = "button",
  className = "btn-primary",
  onClick,
  children,
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
