import React from "react";

const EventWithParams = () => {
  let handleClick = (name) => {
    alert(`Hello how are you? ${name}`);
  };
  return (
    <div>
      <button onClick={() => handleClick("John")}>Click Me</button>
    </div>
  );
};

export default EventWithParams;
