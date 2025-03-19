import React, { useState } from "react";

const NameStateChange = () => {
  let [name, setName] = useState("John");
  let [age, setAge] = useState(20);
  //   console.log(name);
  //   console.log(age);

  let changeData = () => {
    setName("Bob");
    setAge(25);
  };
  return (
    <div>
      <h1 className="bg-red-600">Name:{name}</h1>
      <h1>Age:{age}</h1>
      <button onClick={changeData}>Change Data</button>
    </div>
  );
};

export default NameStateChange;
