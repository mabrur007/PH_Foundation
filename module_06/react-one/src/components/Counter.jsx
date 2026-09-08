import { useState } from "react";

export default function Counter() {
	let [count, setCount] = useState(0);
	// increment
	const increment = () => {
		setCount(++count);
		console.log(count);
	};
	const decrement = () => {
		if (count > 0) {
			setCount(--count);
			console.log(count);
		}
	};
	return (
		<div>
			<h2>This is a counter app</h2>
			<div>
				<button onClick={decrement}>Dec-</button>
				<span>{count}</span>
				<button onClick={increment}>Inc+</button>
			</div>
		</div>
	);
}
