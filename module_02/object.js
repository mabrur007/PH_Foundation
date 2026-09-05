let user = {
	name: "akash",
	age: 22,
	profession: "student",
	address: {
		road: 12,
		block: "B",
		house: 22,
		city: "Dhaka",
		country: "Bangladesh",
	},
};

let info = Object.entries(user);
console.log(info[1]);
console.log(user.address.block);
console.log(user["address"]["block"]);
