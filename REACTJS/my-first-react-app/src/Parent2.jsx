import React from "react";
import Child2 from "./Child2";

const Parent2 = () => {
  let empoloyee = {
    eName: "Nitish",
    eSalary: 100000,
    eId: 101,
    eDesgination:"Robotics Engineer",
    eDoesExist: true,
    eStatus: undefined,
    eJob: null,
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child2 empoloyee={empoloyee} />
    </div>
  );
};

export default Parent2;
