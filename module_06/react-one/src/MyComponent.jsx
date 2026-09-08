export default function MyComponent({ firstName, lastName, city, children }) {
	console.log(children);
	return (
		<>
			<h1>This is my component</h1>
			<p>Hello world!!!</p>
			<h2>
				hahahah {firstName} {lastName}! your city is: {city}
			</h2>
			<i>
				<b>hohoho </b>
			</i>
			<h3>Children Content is: {children}</h3>
		</>
	);
}
