import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const LoginForm = () => {
  let [showPassword, setShowPassword] = useState(true);

  let handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form Submitted Successfully");
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[250px] bg-gray-800 text-white p-5 rounded-xl"
      >
        <h1 className="text-center text-2xl py-1">Login Form</h1>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-2">
            Username
          </label>
          <input
            type="email"
            className="outline-none rounded-full ring-1 focus:ring-indigo-600 px-2"
          />
        </div>
        <div className="flex flex-col mb-2 relative">
          <label htmlFor="" className="mb-2">
            Password
          </label>
          <input
            type={showPassword ? "password" : "text"}
            className="outline-none rounded-full ring-1 focus:ring-indigo-600 px-2"
          />
          <span
            onClick={handleTogglePassword}
            className="absolute right-[5px] bottom-[4px] cursor-pointer"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-600 px-6 py-1 rounded-lg mt-2 cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
