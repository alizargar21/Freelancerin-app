import React from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

const Sidebar = ({children}) => {
  return (
    <div className="bg-secondary-100 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        {children}
        {/* <li>
          <CustomNavLink
            path="/owner/dashboard"
            icon={<HiHome />}
            title={"داشبورد"}
          />
        </li>
        <li>
          <CustomNavLink
            path="/owner/projects"
            icon={<HiCollection />}
            title={" پروژه ها"}
          />
        </li>
        <li>
          <NavLink to={"/owner/dashboard"}></NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
