import React from "react";

const ChildComponent = (props) => {
  //   console.log(props);
  //! Destructuring of an object (props)
  let { name, age } = props;
  return (
    <div>
      <h1>ChildComponent</h1>
      {/* <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2> */}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default ChildComponent;
