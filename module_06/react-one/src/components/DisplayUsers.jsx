import { useEffect, useState } from "react";

export default function DisplayUsers() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	// old method of data fetching
	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.message || "Something went wrong");
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((data) => setData(data))
	// 		.catch((err) => setError(err))
	// 		.finally(() => setIsLoading(false));
	// }, []);

	// modern method of data fetching : recommended*
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/user");
				if (!res.ok) {
					throw new Error(res.ok || "Something went wrong!!");
				}
				const data = await res.json();
				setData(data);
			} catch (err) {
				setError(err.message);
				console.log(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchUsers();
	}, []);
	console.log(data);
	if (isLoading) {
		return <p>loading....</p>;
	}

	return (
		<div>
			<h2>{error}</h2>
			{data.map((d) => (
				<p key={d.id}>{d.name}</p>
			))}
		</div>
	);
}
// useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((data) => setData(data))
// 			.finally(() => setIsLoading(false));
// 	}, []);
