import React, { createContext } from "react";

//! Step-1: Create global context
export let secretProperty = createContext();

const Grandpa = ({ children }) => {
  let grandpaTreasure = {
    house: "🏠Big villa",
    gold: "🪙100 gold coins",
    wisdom: "🧾Ancient life lessons",
  };
  return (
    <secretProperty.Provider value={grandpaTreasure}>
      {children}
    </secretProperty.Provider>
  );
};

export default Grandpa;
