import React from "react";

const Experssion = () => {
  let food = "spicy chicken";
  console.log(food);

  let foodIsGood = false;
  let iceCreamIsTheir = null;
  let areYouHappy = undefined;
  console.log(foodIsGood);
  console.log(iceCreamIsTheir);
  console.log(areYouHappy);
  return (
    <>
      <h1>JSX Experssion</h1>
      <h2>Food: {food}</h2>
      <h2>foodIsGood:{foodIsGood}</h2>
      <h2>iceCreamIsTheir: {iceCreamIsTheir}</h2>
      <h2>areYouHappy: {areYouHappy}</h2>
      
    </>
  );
};

export default Experssion;
