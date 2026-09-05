function total(price, qnt) {
	const grandTotal = price * qnt;
	return grandTotal;
}

// console.log(total(10, 3));
// total(10, 3);

function hello(name) {
	// console.log();
	return `Hello dear ${name}`;
}
// console.log(hello("Akasha"));

const add = (a, b) => a + b;
const res = add(2, 3);
// console.log(res);

{
}
let age = 20;
console.log("Age is - ", age);

function showAge() {
	age = 40;
	console.log("Func age -", age);
}

showAge();
console.log(age);
