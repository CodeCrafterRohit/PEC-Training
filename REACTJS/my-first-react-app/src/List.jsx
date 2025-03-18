import React from "react";

const List = () => {
  let foodList = [
    "Biryani",
    "Pasta",
    "Noodles",
    "Parotha",
    "Dosa",
    "Fish Curry",
    "Fried Rice",
    "Pizza",
    "Burger",
    "PaniPuri",
    "Pavbhaji",
  ];
  console.log(foodList);
  return (
    <div>
      <h1>Food Items</h1>
      {foodList.map((food, index) => {
        return <li key={index}>{food}</li>;
      })}
    </div>
  );
};

export default List;
