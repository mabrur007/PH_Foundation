let fruits = ["mango", "bananna", "papaya", "lichy", "guava", "pomogrande"];

// find
let myFav = fruits.find((f) => f.length > 6);
// console.log("Find method applied:", myFav);

// filter
let myFav2 = fruits.filter((f) => f.length > 6);
// console.log("Filter method applied:", myFav2);

// some
let myFav3 = fruits.some((f) => f.length > 7);
// console.log("Some method applied:",myFav3);

// every
let myFav4 = fruits.every((f) => f.length > 4);
console.log("Every method applied:", myFav4);
