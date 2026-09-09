import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import InputHandle from "./components/InputHandle";

export default function App() {
	const [input, setInput] = useState("");
	const [age, setAge] = useState("");
	const [submitted, setSubmitted] = useState([]);

	const members = [
		{ name: "Galib", age: 39 },
		{ name: "Habib", age: 73 },
		{ name: "Sakib", age: 10 },
		{ name: "Rakib", age: 12 },
		{ name: "Salam", age: 25 },
	];

	const submitHandler = (e) => {
		e.preventDefault();
		// setSubmitted([...submitted, input]);
		// setInput(" ");
		console.log(input, age);
	};

	console.log(submitted);

	return (
		<>
			{/* <MyComponent firstName={"akash"} lastName={"batash"} city={"Dhaka"}>
				This is My Component
			</MyComponent> */}
			{/* <h1>This is card component.</h1> */}
			{/* <Card name="Akij" age={39} />
			<Card name="Badol" age={17} /> */}
			{/* {members
				.filter((member) => member.age > 18)
				.sort((a, b) => a.age - b.age)
				.map((member) => (
					<Card name={member.name} age={member.age} key={member.age} />
				))} */}

			{/* counter component */}
			<Counter />
			<br />
			<br />
			{/* input field handling in react */}
			{/* <form onSubmit={submitHandler}>
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
				<input type="text" onChange={(e) => setAge(e.target.value)} />
				<input type="submit" value="Submit" />
			</form>
			<h2>{input}</h2>
			<ul>
				{submitted.map((s, id) => (
					<li key={id}>{s}</li>
				))}
			</ul> */}

			<InputHandle />
		</>
	);
}
