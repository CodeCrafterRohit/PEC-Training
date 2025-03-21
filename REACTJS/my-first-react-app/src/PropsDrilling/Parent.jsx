import React from "react";
import Child from "./Child";

const Parent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Parent</h1>
      <hr />
      <Child />
    </div>
  );
};

export default Parent;
