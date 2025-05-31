import React from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ to, children }) {
  return (
    <li className="flex text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:bg-blue-50 rounded-md">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? " text-gray-900 w-full bg-blue-50 rounded-sm px-3 py-2"
            : "w-full px-3 py-2"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
