// reduce, sort, chaining

let products = [
	{ title: "Mouse", price: 500, inStock: true },
	{ title: "Keyboard", price: 1200, inStock: false },
	{ title: "Monitor", price: 8000, inStock: true },
	{ title: "Headphone", price: 1500, inStock: true },
];

let totalPrice = products.reduce((acc, current) => {
	// only for products in stock
	if (current.inStock === true) {
		acc += current.price;
	}
	return acc;
}, 0);

// console.log(totalPrice);

// sort method
// let sorted = [55, 11, 99, 111, 33, 88, 222].sort((a, b) => a - b); // assecnding order
// let sorted = [55, 11, 99, 111, 33, 88, 222].sort((a, b) => b - a); // descending order

let sorted = products.sort((a, b) => b.price - a.price);
// console.log(sorted);

// *** another practice ***
let estPrice = products.filter((p) => p.inStock == true).reduce((acc, curr) => (acc += curr.price), 0);
console.log(estPrice);
