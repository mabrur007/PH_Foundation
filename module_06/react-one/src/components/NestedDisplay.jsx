// export default function NestedDisplay({ count }) {
// 	return (
// 		<div className="card bg-red">
// 			<p>This is grandchild component</p>
// 			<h2>{count}</h2>
// 		</div>
// 	);
// }

import { use } from "react";
import { CounterContext } from "../providers/counter.provider";

// context api implemented
export default function NestedDisplay() {
	const { count } = use(CounterContext);
	return (
		<div className="card bg-red">
			<p>This is grandchild component</p>
			<h2>{count}</h2>
		</div>
	);
}
