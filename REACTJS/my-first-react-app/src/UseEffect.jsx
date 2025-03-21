import React, { useEffect, useState } from "react";

const UseEffect = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  let handleCount1 = () => {
    setCount1(count1 + 1);
  };

  let handleCount2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("Counter-1 is rendered");
  },[count1,count2]);
  
  useEffect(() => {
    console.log("Counter-2 is rendered");
  },[count2]);

//   console.log("Component rendered");
  return (
    <div>
      <h1 className="ml-10">Counter1: {count1}</h1>
      <button
        className="border bg-indigo-600 rounded-lg p-2 ml-8 text-white cursor-pointer"
        onClick={handleCount1}
      >
        Increment
      </button>
      <hr />
      <h1 className="ml-10">Counter2: {count2}</h1>
      <button
        className="border bg-indigo-600 rounded-lg p-2 ml-8 text-white cursor-pointer"
        onClick={handleCount2}
      >
        Increment
      </button>
      <hr />
    </div>
  );
};

export default UseEffect;
