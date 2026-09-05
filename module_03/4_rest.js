let rem = [];
function addition(one, two, ...remaining) {
	console.log(one, two, remaining);
	rem = remaining;
}

addition(1, 2, 33, 44, 55, 66);

console.log(rem);
