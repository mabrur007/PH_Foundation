let animals = ["dog", "cat", "chicken", "horse"];

// for (let i of animals) {
// 	console.log(i);
// }

let user = {
	name: "akash",
	work: "batash",
	id: 222,
};

// for (let key in user) {
// 	console.log(`${key} -> ${user[key]}`);
// }

let marks = 50;

// for (let i = marks; i < 80; i++) {
// 	if (i >= 55) {
// 		break;
// 	}
// 	console.log("Mark is: ", i);
// }

for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		continue;
	}
	console.log(i);
}
