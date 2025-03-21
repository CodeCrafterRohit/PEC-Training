import React, { createContext } from "react";

//! Step-1: create context
export let myContext = createContext();

const Context = ({ children }) => {
  //! Create the data
  let property = "2cr";
  
  return (
  <myContext.Provider value={property}>
    {children}
  </myContext.Provider>);
};

export default Context;
