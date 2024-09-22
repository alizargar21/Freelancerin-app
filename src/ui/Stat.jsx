import React from "react";
import { toPersianNumbers } from "../utils/toPersianNumber";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",

  orange: "bg-orange-100 text-orange-700",
};
const Stat = ({ icon, value, title, color }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-[6.4rem_1fr] col-span-1 gap-x-4 bg-secondary-0 p-4 rounded-lg">
      <div
        className={`row-span-2 flex items-center justify-center p-2 rounded-full aspect-square ${colors[color]} `}
      >
        {icon}
      </div>
      <h1 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h1>
      <p className="text-3xl font-bold text-secondary-900">{toPersianNumbers(value)}</p>
    </div>
  );
};

export default Stat;
