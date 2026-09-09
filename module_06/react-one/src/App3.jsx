// import "./components/Card.css";

// import { useState } from "react";
// import Counter from "./components/Counter";
// import DisplayCounter from "./components/DisplayCounter";

// export default function App() {
// 	// this is the example of state sharing
// 	const [count, setCount] = useState(0);
// 	return (
// 		<div className="card bg-red">
// 			<p>This is the parent component</p>
// 			<Counter count={count} setCount={setCount} />
// 			<DisplayCounter count={count} />
// 		</div>
// 	);
// }

//implementing context api
import "./components/Card.css";

import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import CounterProvider from "./providers/counter.provider";

export default function App() {
	return (
		<CounterProvider>
			<div className="card bg-red">
				<p>This is the parent component</p>
				<Counter />
				<DisplayCounter />
			</div>
		</CounterProvider>
	);
}
