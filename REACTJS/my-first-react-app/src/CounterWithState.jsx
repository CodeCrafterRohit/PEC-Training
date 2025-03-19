import React, { useState } from "react";

const CounterWithState = () => {
  //! useState -> hook
  let [count, setCount] = useState(0);
  console.log(count);

 //? This function which will help you to increment the count   
  let handleIncrement = () => {
    setCount(count + 1);
  };
  //? This function which will help you to decrement the count 
  let handleDecrement = () => {
    setCount(count - 1);
  };
  //? This function which will help you to reset the count to zero
  let handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>CounterWithState</h1>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterWithState;
