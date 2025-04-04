import React, { useContext } from "react";
import { AuthUserContext } from "../context/AuthContextApi";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);

  //! This for login, register and reset password
  if (authUser != null) {
    return <Navigate to={"/user/profile"} />;
  } else {
    return <>{children}</>;
  }
};

export default PublicRoutes;
