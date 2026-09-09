import NestedDisplay from "./NestedDisplay";

export default function DisplayCounter({ count }) {
	// this is the example of state sharing
	return (
		<div className="card bg-green">
			<p>This is child component</p>
			{count}
			<NestedDisplay count={count} />
		</div>
	);
}
