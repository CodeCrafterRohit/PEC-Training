console.log("Callback Function");

//! Function for order the food
function orderFood(waiter) {
  console.log("Chef: Your delicious chicken🍗 is ready!");
  waiter();
}

//! Function for serv the food
function servOrder() {
  console.log("Waiter: The food is ready now you can enjoy your meal!!");
}

function parcelFood() {
  console.log("Please make parcel");
}

orderFood(parcelFood);
