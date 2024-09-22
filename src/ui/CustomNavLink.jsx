import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ path, title, icon }) => {
  const navLinkStyle =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 text-secondary-600 rounded-lg transition-all duration-300 ";
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? `${navLinkStyle} bg-primary-100/50 text-primary-900`
            : `${navLinkStyle} text-secondary-600`
        }
      >
        <span>{icon}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
