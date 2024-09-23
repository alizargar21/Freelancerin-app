import React from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <h1>وضعیت</h1>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0  rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;

        return (
          <Button
          key={value}
          isDisabled={isActive}
          onClick={() => {
            handleClick(value);
          }}
          className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
             ${
               isActive
                 ? "!bg-primary-900 text-white"
                 : "bg-secondary-0  text-secondary-800"
             }`}
          title={label}
          />
        )
        })}
      </div>
    </div>
  );
};

export default Filter;
