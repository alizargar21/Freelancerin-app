import React from "react";
import Button from "../ui/Button";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const backHandler = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="sm:max-w-sm flex justify-center pt-52">
        <div>
          <h1 className="text-xl font-bold text-secondary-500  mb-8">
            صفحه ای که دنبالش بودید پیدا نشد
          </h1>
          <Button
            title={<HiArrowRight className="w-6 h-6 text-primary-900" />}
            onClick={backHandler}
            className={"flex items-center gap-x-2"}
          />
          <span>برگشت</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
