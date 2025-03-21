import React from "react";
import MainChiild from "./MainChiild";

const MainParent = () => {
  return (
    <div>
      <h1>MainParent</h1>
      <MainChiild name="Kamalesh" />
    </div>
  );
};

export default MainParent;
