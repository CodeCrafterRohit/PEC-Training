import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildComponent name="yashwant" age = {20} />
    </div>
  );
};

export default ParentComponent;
