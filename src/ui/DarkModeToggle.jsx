import React from "react";
import Button from "./Button";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button
      title={
        isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 text-primary-500" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 text-primary-500" />
        )
      }
      onClick={toggleDarkMode}
    />
  );
};

export default DarkModeToggle;
