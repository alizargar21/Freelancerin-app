import React from "react";

const RHFSelect = ({ label, name, register, options, required }) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
          {label} {required  && <span className="text-error">*</span>}
        <select {...register(name)} id={name} className="textField__input">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default RHFSelect;
