function add(a, b) {
	return a + b;
}

export function subs(a, b) {
	if (a > b) {
		return a - b;
	} else {
		return b - a;
	}
}

export default add;
