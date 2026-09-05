let weight = process.argv[2];
let height = process.argv[3];

function calculateBmi(weight, height) {
	const bmi = weight / (height * height);
	return bmi;
}

const bmi = calculateBmi(weight, height).toFixed(1);
console.log("The BMI is:", bmi);

if (bmi < 18.5) {
	console.log("Person is underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
	console.log("Person is fit");
} else if (bmi >= 25.0 && bmi <= 29.9) {
	console.log("Person has excess body weight relative to height");
} else if (bmi >= 30.0) {
	console.log("Person has obesity!");
}
