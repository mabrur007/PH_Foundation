let student = {
	name: "Abul",
	age: 23,
	roll: 1,
};

let { name, age, roll } = student;
// console.log(name, age, roll);

let user = {
	uName: "Akil",
	pass: 232,
	address: {
		city: "dhaka",
		house: 22,
	},
};

let {
	uName,
	pass: pw,
	address: { city, house },
} = user;

// console.log(pw, city, house);

// ***** array dest ***** //
let fruits = ["mango", "bananna", "orange"];

let [, , last] = fruits;
console.log(last);
