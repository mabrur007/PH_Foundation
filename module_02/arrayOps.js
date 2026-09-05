let marks = [1, 2, 3];

let max = marks[0];

for (let i = 1; i < marks.length; i++) {
	if (max < marks[i]) {
		max = marks[i];
	}
}
console.log("Max number: ", max);

let sum = 0;

for (let mark of marks) {
	sum = sum + mark;
}
console.log("Total sum: ", sum);

// marks = [1, 2, 3];
let reMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
	reMarks.push(i);
}
console.log("reMarks: ", reMarks);
