let movies = [
	{ title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
	{ title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
	{ title: "Interstellar", year: 2014, rating: 8.7, genre: "Sci-Fi" },
	{ title: "Parasite", year: 2019, rating: 8.5, genre: "Thriller" },
	{ title: "Avatar", year: 2014, rating: 7.8, genre: "Sci-Fi" },
	{ title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime" },
	{ title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama" },
];

// only Sci-Fi movies, sort accending based on rating
let sciFi = movies
	?.filter((m) => m.genre == "Sci-Fi")
	?.sort((a, b) => b.rating - a.rating)
	?.map((m, id) => ({ title: m.title, rating: m.rating }));

// console.log(sciFi);

// ***** practice 2 *****
// In-Stock products only, descending order as price wise, show only title and price, finally total price.
let products = [
	{ id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
	{ id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
	{ id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
	{ id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
	{ id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true },
];

let finalProducts = products
	.filter((p) => p.inStock == true) // product in stock
	.sort((a, b) => a.price - b.price) // deccending order sorting
	.map((p) => ({ title: p.title, price: p.price })); // adding title and price in object

console.log("Final Products:\n", finalProducts);

let totalPrice = finalProducts.reduce((acc, cur) => {
	return (acc += cur.price); // finalizing total price
}, 0);

console.log(`\nFinal products total price: ${totalPrice} BDT`);
