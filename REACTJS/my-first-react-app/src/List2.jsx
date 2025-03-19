import React from "react";

const List2 = () => {
  let lifeErrors = [
    "Sleep not found😴",
    "Diet not healthy. Junk food detected 😫",
    "Seraching for peace 🥲",
    "money.exe is not found 💸",
    "hairfall 🤦‍♂️",
    "{} not responding 🙄",
    "life is not responding🤔",
  ];
  console.log(lifeErrors);
  return (
    <div>
      <h1>Life Errors</h1>
      <ul>
        {lifeErrors.map((error, index) => {
          return <li key={index}>{error}</li>;
        })}
      </ul>
    </div>
  );
};

export default List2;
