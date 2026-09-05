let student = {
	name: "Rabin",
	id: 301,
	marks: {
		bangla: 70,
		english: 78,
		math: 90,
	},
};

let sub = [];
let totalMarks = 0;
let totalSub = 0;

for (let mark in student.marks) {
	let eachMark = student.marks[mark];
	totalMarks += eachMark;

	sub.push(eachMark);
}
totalSub = sub.length;
// console.log("Total Marks: ", totalMarks);
// console.log("Total Sub: ", totalSub);
// console.log("Student avg Mark: ", totalMarks / totalSub);

// ******** Exercise ********* //
// find out the total buying items and total price cost.

let cart = [
	{ name: "Shirt", price: 1200, quantity: 2 },
	{ name: "Pants", price: 1800, quantity: 1 },
	{ name: "Socks", price: 150, quantity: 3 },
];

let totalPrice = 0;
let totalQuantity = 0;

for (let item of cart) {
	let eachPrice = item.price * item.quantity; // every single purchase price
	totalPrice += eachPrice;

	let eachQuantity = item.quantity; // every single purchase quantity
	totalQuantity += eachQuantity;
}
console.log("Total Price: ", totalPrice);
console.log("Total Quantity : ", totalQuantity);
