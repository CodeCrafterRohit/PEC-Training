import React from "react";
import Login from "./Login";
import Register from "./Register";


const TernaryRender = () => {
  //   let user = true;
  let num = 10;

  let isLoggedInUser = false;
  //! condition? statement-1 : statement-2
  return (
    <div>
      <h1>Conditional Rendering with the help TernaryOperator</h1>
      {/* {user ? <h1>Welcome User</h1> : <h1>Login User</h1>} */}
      {/* {num > 20 ? <h1>Number is greater</h1> : <h1>Number is smaller</h1>} */}

      {isLoggedInUser ? <Login/> : <Register/>   }
    </div>
  );
};

export default TernaryRender;
