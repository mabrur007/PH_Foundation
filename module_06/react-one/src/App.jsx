import Card from "./components/Card";

export default function App() {
	const members = [
		{ name: "Galib", age: 39 },
		{ name: "Habib", age: 73 },
		{ name: "Sakib", age: 10 },
		{ name: "Rakib", age: 12 },
		{ name: "Salam", age: 25 },
	];
	return (
		<>
			{/* <MyComponent firstName={"akash"} lastName={"batash"} city={"Dhaka"}>
				This is My Component
			</MyComponent> */}

			<h1>This is card component.</h1>
			{/* <Card name="Akij" age={39} />
			<Card name="Badol" age={17} /> */}
			{members.map((member) => (
				<Card name={member.name} age={member.age} />
			))}
		</>
	);
}

// export default App;
