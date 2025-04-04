import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { __AUTH } from "../backend/firebaseconfig";
import Spinner from "../helper/Spinner";

const Login = () => {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let [showPassword, setShowPassword] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  let { email, password } = userData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  let togglePassword = () => {
    setShowPassword(!showPassword);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //! Sign in user with email and password
      let loggedInUser = await signInWithEmailAndPassword(
        __AUTH,
        email,
        password
      );
      console.log(loggedInUser);
      if (loggedInUser.user.emailVerified === true) {
        toast.success("User has been logged in");
        navigate("/");
      } else {
        toast.error("Email is not yet verified");
      }
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false);
  };
  return (
    <section className="text-white w-[100vw] min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-700 p-5 rounded-xl">
        <header className="text-center text-3xl font-bold py-3">
          <h1>Login</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <span className="absolute bottom-[25px] right-[20px] text-lg cursor-pointer">
              <FaUser />
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword}
              className="absolute bottom-[25px] right-[20px] cursor-pointer text-lg"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3">
            <button className="bg-blue-600 py-2 text-lg rounded-lg cursor-pointer font-semibold hover:bg-blue-700">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center mb-2">
            <NavLink
              to={"/auth/register"}
              className={"hover:text-blue-500 hover:underline"}
            >
              Don't have an account?
            </NavLink>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to={"/auth/reset-password"}
              className={"hover:text-blue-500 hover:underline"}
            >
              Forgot Password
            </NavLink>
          </div>
        </form>
      </article>
      {isLoading && (
        <section className="w-[100%] h-[100vh] bg-black/50 fixed top-0">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default Login;
