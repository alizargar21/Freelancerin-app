import React from "react";

const Button = ({ name, title, className, onClick, type , isDisabled }) => {
  return (
    <button className={className} onClick={onClick} type={type} id={name} disabled={isDisabled}>
      {title}
    </button>
  );
};

export default Button;
