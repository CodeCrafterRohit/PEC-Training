import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { __AUTH } from "../backend/firebaseconfig.js";
import { NavLink, useNavigate } from "react-router-dom";
import Spinner from "../helper/Spinner.jsx";

const Register = () => {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let [showPassword1, setShowPassword1] = useState(false);
  let [showPassword2, setShowPassword2] = useState(false);

  let [isLoading, setIsLoading] = useState(false);

  //! Destructuring of an user data
  let { username, email, password, confirmPassword } = userData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (password === confirmPassword) {
        //! Create the user with email and password
        let registeredUser = await createUserWithEmailAndPassword(
          __AUTH,
          email,
          password
        );
        console.log(registeredUser);

        //! Send email verification 
        sendEmailVerification(registeredUser.user);

        //! Update profile name and photo url which 
        //! is not updated by default
        updateProfile(registeredUser.user, {
          displayName:username,
          photoURL:"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
        })

        toast.success(`Email Verification has been sent to your regsitered ${email}`);
        toast.success("User has been registered successfully");
        navigate("/auth/login");
      } else {
        toast.error("Password does not matched");
        setUserData({
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error.code.slice(5));
    }
    setIsLoading(false);
  };

  let togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  let togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <section className="text-white w-[100vw] min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-gray-700 p-5 rounded-xl">
        <header className="text-center text-3xl font-bold py-2">
          <h1>Register</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-1 p-3">
            <label htmlFor="username" className="font-semibold text-lg mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your name"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col mb-1 p-3">
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
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type={showPassword1 ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword1}
              className="absolute bottom-[25px] right-[20px] cursor-pointer text-lg"
            >
              {showPassword1 ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label
              htmlFor="confirmPassword"
              className="font-semibold text-lg mb-1"
            >
              Confirm Password
            </label>
            <input
              type={showPassword2 ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="outline-none border border-gray-500 p-2 rounded-lg"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword2}
              className="absolute bottom-[25px] right-[20px] cursor-pointer text-lg"
            >
              {showPassword2 ? <IoEye /> : <IoEyeOff />}
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3">
            <button className="bg-blue-600 py-2 text-lg rounded-lg cursor-pointer font-semibold hover:bg-blue-700">
              Register
            </button>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to={"/auth/login"}
              className={"hover:text-blue-500 hover:underline"}
            >
              Already have an account?
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

export default Register;
