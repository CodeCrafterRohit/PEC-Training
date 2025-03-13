console.log("Destructuring in Javascript");

//! 1. Array Destructuring

let movies = ["KGF", "Salaar", "Saaho", "Leo", "RRR", "Billa"];
console.log(movies);
console.log(movies[3]); // Leo

//? destructure
let [a, b, c, d, e, f] = movies;
console.log(d);
console.log(f);

//! 2. Objects Destructuring
let hero = {
  name: "Ajith",
  age: 53,
  job: "Actor",
};
console.log(hero);
console.log(hero.name); // Ajith

//? destructure
let { name, age, job } = obj;
console.log(name);
console.log(age);
console.log(job);
