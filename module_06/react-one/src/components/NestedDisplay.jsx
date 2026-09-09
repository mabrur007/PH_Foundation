export default function NestedDisplay({ count }) {
	return (
		<div className="card bg-red">
			<p>This is grandchild component</p>
			<h2>{count}</h2>
		</div>
	);
}
