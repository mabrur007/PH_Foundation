import "../components/Card.css";
export default function Card({ name, age }) {
	return (
		<>
			{/* {name == "akij" ? `User's age: ${age}` : "Invalid user"} */}
			{age > 18 ? (
				<div className="card bg-green">
					<h2>{name}, You are eligible for giving vote</h2>
				</div>
			) : (
				<div className="card bg-red">
					<h2>{name}, You are not eligible for giving vote</h2>
				</div>
			)}
		</>
	);
}
