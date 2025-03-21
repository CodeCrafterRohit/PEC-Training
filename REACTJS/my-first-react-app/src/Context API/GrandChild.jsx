import React, { useContext } from "react";
import { secretProperty } from "./Grandpa";

const GrandChild = () => {
  //! Step-3: Access the treasure
  let data = useContext(secretProperty);
  console.log(data);
  return (
    <div>
      <h1>🧒GrandChild</h1>
      <h1>House: {data.house}</h1>
      <h1>Gold: {data.gold}</h1>
      <h1>Wisdom: {data.wisdom}</h1>
    </div>
  );
};

export default GrandChild;
