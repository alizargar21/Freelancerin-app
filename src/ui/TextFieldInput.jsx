import React from "react";

const TextFieldInput = ({ label, onChange, name, value,  }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="textField__input"
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default TextFieldInput;
