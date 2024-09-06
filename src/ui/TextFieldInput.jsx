import React from "react";

const TextFieldInput = ({ label, onChange, name, value, type = "text" }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="textField__input"
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default TextFieldInput;
