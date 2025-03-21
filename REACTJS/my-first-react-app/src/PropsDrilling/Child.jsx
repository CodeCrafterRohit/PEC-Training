import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Child</h1>
      <hr />
      <GrandChild />
    </div>
  );
};

export default Child;
