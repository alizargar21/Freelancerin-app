import React from "react";

const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-2 text-xl"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
