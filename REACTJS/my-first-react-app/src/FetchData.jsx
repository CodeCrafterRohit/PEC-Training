import React, { useEffect, useState } from "react";

const FetchData = () => {
  let [data, setData] = useState([]); //! Initially empty array
  let fetchProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
  };

  //! useEffect() -> hook
  //? Syntax -> useEffect(callbackFunction, dependecy_array)
  useEffect(() => {
    fetchProducts();
  },[]);

  return <div>FetchData</div>;
};

export default FetchData;
