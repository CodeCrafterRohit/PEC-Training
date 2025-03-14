//! setTimeout()
//? Syntax => setTiemout(callbackFun, time(miliseconds))

let timer = setTimeout(() => {
  console.log("Hello World!!");
}, 2000);

//! clearTimeout(timerID)
// clearTimeout(timer)

//! setInterval() =>
//? setInterval(callbackFun, time(ms))
let i = 1;
let timeInterval = setInterval(() => {
  console.log("Task-", i++);
}, 1000);

//! clearInterval(timerID)
// clearInterval(timeInterval)


