// import NestedDisplay from "./NestedDisplay";

// export default function DisplayCounter({ count }) {
// 	// this is the example of state sharing
// 	return (
// 		<div className="card bg-green">
// 			<p>This is child component</p>
// 			{count}
// 			<NestedDisplay count={count} />
// 		</div>
// 	);
// }

// context api implemented
import { use } from "react";
import { CounterContext } from "../providers/counter.provider";
import NestedDisplay from "./NestedDisplay";

export default function DisplayCounter() {
	const { count } = use(CounterContext);

	return (
		<div className="card bg-green">
			<p>This is child component</p>
			{count}
			<NestedDisplay />
		</div>
	);
}
