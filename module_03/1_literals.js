let price = 500;
let quantity = 3;

function getDiscount(price, disPercentage = 0.1) {
	return price * disPercentage;
}

console.log(`You got ${getDiscount(price, 0.2)} BDT discount!`);
