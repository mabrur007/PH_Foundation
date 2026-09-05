let colors = ["blue", "red", "black"];
// console.log("Old array:", colors);

let newColors = [...colors, "pink", "white"];
// console.log("New array:", newColors);
newColors.push("gray");

// console.log(colors);
// console.log(newColors);

let profile = {
	uName: "John",
	email: "john@gmail.com",
};

let contact = {
	phone: "01234",
	add: "Dhaka",
};

let userProfile = { ...profile, ...contact };
console.log(userProfile);
