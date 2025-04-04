import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextApi";
import { IoIosLogOut } from "react-icons/io";
import { BackendUserContext } from "../../context/FetchUserContext";

const Menu = () => {
  let { authUser, logout } = useContext(AuthUserContext);
  // console.log(authUser);

  let { userData } = useContext(BackendUserContext);
  let role = userData?.role;
  // console.log(role);

  //! This for the unknown user - first time
  let AnonymousUser = () => {
    return (
      <>
        <li>
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700" : ""
              } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/auth/register"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700" : ""
              } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer`
            }
          >
            Register
          </NavLink>
        </li>
      </>
    );
  };

  //! This is for authenticated user - verified user
  let AuthenticatedUser = () => {
    return (
      <>
        {role === "admin" && (
          <li>
            <NavLink
              to={"/admin"}
              end
              className={({ isActive }) =>
                `${
                  isActive ? "bg-blue-700" : ""
                } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer flex gap-2 items-center`
              }
            >
              Admin
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={"/user/profile"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700" : ""
              } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer flex gap-2 items-center`
            }
          >
            <span>{authUser?.displayName}</span>
            <img
              src={authUser?.photoURL}
              alt=""
              className="w-[25px] h-[25px] rounded-full"
            />
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => logout()}
            className={`px-4 mr-3 py-2 font-semibold hover:bg-red-600 rounded-lg cursor-pointer flex gap-2 items-center`}
          >
            <span>Logout</span>
            <span className="text-lg">
              <IoIosLogOut />
            </span>
          </button>
        </li>
      </>
    );
  };
  return (
    <aside className="basis-[30%] h-[70px]">
      <ul className="w-full h-[70px] flex justify-evenly items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700" : ""
              } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer flex gap-2 items-center`
            }
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to={""}
            className={({ isActive }) =>
              `${
                isActive ? "bg-blue-700" : ""
              } px-4 py-2 font-semibold hover:bg-blue-600 rounded-lg cursor-pointer`
            }
          >
            Admin
          </NavLink>
        </li> */}
        {authUser === null ? <AnonymousUser /> : <AuthenticatedUser />}
      </ul>
    </aside>
  );
};

export default Menu;
