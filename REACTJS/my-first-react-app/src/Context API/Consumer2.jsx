import React, { useContext } from "react";
import { myContext } from "./Context";

const Consumer2 = () => {
    //! Step-3: Consume that data by using the useContext() hook
  let data2 = useContext(myContext);
  console.log("Consumer-2:", data2);

  return <div>Property for consumer-2: {data2}</div>;
};

export default Consumer2;
