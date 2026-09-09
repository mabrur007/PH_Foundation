import { useEffect, useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const [newCount, setNewCount] = useState(0);

	useEffect(() => {
		console.log("Count clicked: ", newCount);
	}, [newCount]);

	// useEffect will only work, when there are dependency available. for the above example, when the new count button is clicked only then the use effect will work.

	// we use useEffect for using side effects in react. data fetching is also a side effect

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Increment ({count})</button>
			<button onClick={() => setNewCount(newCount + 1)}>Increment ({newCount})</button>
		</div>
	);
}
