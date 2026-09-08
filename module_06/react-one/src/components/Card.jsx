import { useState } from "react";
import "../components/Card.css";
export default function Card({ name, age }) {
	// useState
	const [member, setMember] = useState("");

	// functional chaining practice
	// const showName = (name) => {
	// 	console.log("Hello, ", name);
	// };
	// const showAge = (age) => {
	// 	console.log("Your age is: ", age);
	// };
	// const showNameAge = (name, age) => {
	// 	showName(name);
	// 	showAge(age);
	// };
	return (
		<>
			{/* {name == "akij" ? `User's age: ${age}` : "Invalid user"} */}
			{age > 18 ? (
				<div onClick={() => setMember("user: " + name)} className="card bg-green">
					<h2>
						{name}, You are eligible for giving vote! Your age: {age}
					</h2>
					<p>{member}</p>
				</div>
			) : (
				<div className="card bg-red">
					<h2>
						{name}, You are not eligible for giving vote! Your age: {age}
					</h2>
				</div>
			)}
		</>
	);
}
