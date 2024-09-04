import React from "react";

const Button = ({ name, title, className, onClick, type }) => {
  return (
    <button className={className} onClick={onClick} type={type} id={name}>
      {title}
    </button>
  );
};

export default Button;
