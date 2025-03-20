import React from "react";

const ShortCircuit = () => {
  let mood = true;

  //! true && statement
  return (
    <div>
      <h1>ShortCircuit</h1>
      {mood && <h1>You can sleep</h1>}
    </div>
  );
};

export default ShortCircuit;
