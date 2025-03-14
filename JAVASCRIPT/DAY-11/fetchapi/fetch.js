//!create one function which will fetch the data

async function fetchData() {
  try {
    //! Step-1: Fetch the data with the help of fetch API
    let response = await fetch("https://fakestoreapi.com/products");
    console.log(response);

    //! Step-2: Convert that JSON String data into JS object
    let data = await response.json();

    //! Step-3: Use that data
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
