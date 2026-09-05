// foreach, map

let fruits = ["mango", "bananna", "papaya", "lichy", "guava", "pomogrande"];

let newFruits = fruits.forEach((f) => console.log(f));
// console.log(newFruits);

let newFruits2 = fruits.map((f, id) => f);
console.log(newFruits2);

let myFavFruit = newFruits2.filter((f) => f.length > 6);
console.log(myFavFruit);
