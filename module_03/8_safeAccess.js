// optional chaining, nullish coalescing

let user1 = {
	name: "Akash",
	address: {
		city: "dhaka",
		country: "BD",
	},
};

let user2 = {
	name: "Shagor",
};

// console.log(user1.address.country);
// console.log(user2?.address?.country ?? "China");

// *** more practice ***

// 1
const user = {
	name: "Mabrur",
	age: undefined,
	city: "Dhaka",
};

// console.log(user?.age ?? 25);

// 2
const product = {
	name: "Mouse",
	price: 500,
	discount: 10,
};
if (product.discount == null || undefined) {
	console.log("Product discount:", product?.discount ?? 0);
} else {
	console.log(product.discount);
}

// 3
const user3 = {
	name: "John",
	balance: 0,
};
if (user3.balance == null || undefined) {
	console.log("balance:", 100);
} else {
	console.log(user3.balance);
}

// 4
const settings = {
	theme: null,
	language: "English",
};

const theme = settings?.theme ?? "light";

console.log("Theme is: ", theme);
