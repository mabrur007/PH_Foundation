import { useEffect, useState } from "react";

export default function DisplayUsers() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setData(data))
			.finally(() => setIsLoading(false));
	}, []);
	console.log(data);

	if (isLoading) {
		return <p>loading....</p>;
	}

	return (
		<div>
			{data.map((d) => (
				<p key={d.id}>{d.name}</p>
			))}
		</div>
	);
}
