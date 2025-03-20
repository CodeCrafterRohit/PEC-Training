import React, { useState } from "react";

const Form2 = () => {
  let [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //! Destructure the object
  let { firstName, lastName, email, password } = userData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully but not understood at all");
    console.log("User Details:", userData);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-3xl mb-4">Login Form</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[350px] bg-gray-800 text-white p-8 rounded-lg"
      >
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-2">
            FirstName:
          </label>
          <input
            type="text"
            className="border rounded-md"
            onChange={handleInputChange}
            name="firstName"
            value={firstName}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-2">
            LastName:
          </label>
          <input
            type="text"
            className="border rounded-md"
            name="lastName"
            onChange={handleInputChange}
            value={lastName}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-2">
            Email:
          </label>
          <input
            type="email"
            className="border rounded-md"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="mb-2">
            Password:
          </label>
          <input
            type="password"
            className="border rounded-md"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-indigo-600 px-4 py-1 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
