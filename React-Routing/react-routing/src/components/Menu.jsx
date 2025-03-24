import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="basis-[50%]">
      <ul className="flex justify-evenly items-center h-[70px]">
        <li>
          <NavLink
            to={"/home"}
            className="px-4 py-2 bg-white text-black font-semibold rounded-full cursor-pointer"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className="px-4 py-2 bg-white text-black font-semibold rounded-full cursor-pointer"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className="px-4 py-2 bg-white text-black font-semibold rounded-full cursor-pointer"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
