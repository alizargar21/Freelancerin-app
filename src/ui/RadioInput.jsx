import React from "react";

const RadioInput = ({ name, value, label, onChange, id , checked}) => {
  return (
    <div className="flex   text-secondary-600 items-center gap-x-2">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        checked={checked}
        type="radio"
        className="form-radio cursor-pointer"
        name={name}
        id={id}
        value={value}
      />
    </div>
  );
};

export default RadioInput;
