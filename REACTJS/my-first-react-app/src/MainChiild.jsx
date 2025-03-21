import React from "react";

const MainChiild = (props) => {
  console.log(props);
  return (
    <div>
      <h1>MainChiild</h1>
      <h1>Username: {props.name}</h1>
    </div>
  );
};

export default MainChiild;
