import React from "react";
import Parent from "./Parent";

const Grandparent = () => {
    let property = "2cr";
  return (
    <div>
      <h1>Grandparent</h1>
      <hr />
      <Parent data = {property}/>
    </div>
  );
};

export default Grandparent;
