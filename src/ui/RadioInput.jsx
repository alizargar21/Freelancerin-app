import React from "react";

const RadioInput = ({ name, value, label, register, id, errors, watch , validationSchema}) => {
  return (
    <div className="flex   text-secondary-600 items-center gap-x-2">
      <input
      
        type="radio"
        className="form-radio cursor-pointer"
        name={name}
        {...register(name , validationSchema)}
        id={id}
        checked={watch(name) === value}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
  
    </div>
  );
};

export default RadioInput;
