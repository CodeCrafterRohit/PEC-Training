import React from "react";

const IfElseRender = () => {
  let isLoggedInUser = true;

  // if (condition) {
  //     return JSX;
  // } else {
  //     return JSX;
  // }

  if (isLoggedInUser) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Login User</h1>;
  }
};

export default IfElseRender;
