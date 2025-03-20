import React, { useState } from "react";

const Form1 = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  let handleChangeForFirstName = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    let value = e.target.value;
    setFirstName(value);
  };

  let handleChangeForLastName = (e) => {
    let value = e.target.value;
    setLastName(value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("FirstName:", firstName);
    console.log("LastName:", lastName);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          className="border"
          value={firstName}
          name="firstName"
          onChange={handleChangeForFirstName}
        />
        <br />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          className="border"
          onChange={handleChangeForLastName}
          value={lastName}
          name="lastName"
        />
        <button className="border ml-2">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
