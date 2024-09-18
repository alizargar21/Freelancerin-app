import React from "react";

const TextFieldInput = ({
  label,
  register,
  value,
  name,
  type = "text",
  errors,
  required,
  ValidationSchema = {},
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        {...register(name, ValidationSchema)}
        type={type}
        className="textField__input"
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error text-sm  mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextFieldInput;
