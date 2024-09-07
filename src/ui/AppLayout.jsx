import React from "react";
import Header from "./Header";
import Owner from "../pages/Owner";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_2fr] grid-cols-[15rem_1fr]">
      <Header />
      {/* <div className="bg-secondary-0 py-4 px-8">header</div> */}
      <div className="bg-secondary-100 row-start-1 row-span-2">app sidebar</div>
      <div className="bg-secondary-200 p-8 overflow-y-auto">
        <div className="max-w-screen-md mx-auto flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
