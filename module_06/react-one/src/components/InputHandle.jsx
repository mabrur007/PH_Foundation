import { useState } from "react";

export default function InputHandle() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [users, setUsers] = useState([{ uName: "akash", uAge: 12 }]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// setUsers([...users, { uName: name, uAge: age }]);
		if (!name == "" && !age == "") {
			setUsers([...users, { uName: name, uAge: age }]);
			console.log(users);
			setName("");
			setAge("");
		}
	};
	return (
		<div>
			<form onClick={handleSubmit}>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
				<input type="submit" value="Submit" />
			</form>

			<ul>
				{users.map((user, id) => (
					<li key={id}>
						{user.uName} | {user.uAge}
					</li>
				))}
			</ul>
		</div>
	);
}
