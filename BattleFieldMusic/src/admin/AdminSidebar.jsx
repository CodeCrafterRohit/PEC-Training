import React from "react";
import { NavLink } from "react-router-dom";
import { RiFolderMusicFill } from "react-icons/ri";

const AdminSidebar = () => {
  return (
    <aside className="basis-[14%] min-h-[calc(100vh-70px)] bg-gray-900">
      <nav className="w-full">
        <ul className="w-full p-6">
          <li>
            <NavLink
            to={"create-album"}
              className={({ isActive }) =>
                `py-2 px-4 flex items-center gap-2 hover:bg-blue-600 rounded-md cursor-pointer ${
                  isActive ? "bg-blue-600" : ""
                }`
              }
            >
              <span className="text-lg">
                <RiFolderMusicFill />
              </span>
              <span className="font-semibold">Create Album</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
