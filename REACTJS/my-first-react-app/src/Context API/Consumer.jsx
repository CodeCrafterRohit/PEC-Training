import React, { useContext } from "react";
import { myContext } from "./Context";

const Consumer = () => {
  //! Step-3: Consume the data with the help of useContext()
  let dataRecevied = useContext(myContext);
  console.log("Consumer-1:", dataRecevied);
  
  return <div>Property for consumer-1: {dataRecevied}</div>;
};

export default Consumer;
