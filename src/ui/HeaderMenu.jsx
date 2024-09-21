import React from "react";
import Button from "./Button";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/Authentication/Logout";
const HeaderMenu = () => {
  return (
    <ul className="flex gap-x-4 items-center justify-center bg-red-100">
      <li className="flex">
        <Link to={"dashboard"}>
          <Button
            title={<HiOutlineUser className="w-5 h-5 text-primary-900 mt-2" />}
          />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
