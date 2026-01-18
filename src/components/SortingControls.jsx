import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";

export default function SortingControls({ searchParams, setSearchParams }) {
	const [categories, setCategories] = useState([]);

	const [sortBy, setSortBy] = useState("recent");
	const [order, setOrder] = useState("asc");
	const [category, setCategory] = useState("");

	const { search } = useSearch();

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/categories")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error("Errore categorie:", err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setSearchParams({ q: search, sortBy, order, category });
	};

	return (
		<form
			className="products-filter d-flex justify-content-center align-items-center"
			onSubmit={handleSubmit}
		>
			<h5 className="mt-2 me-1">Ordina per: </h5>

			{/* <select
				className="form-select"
				value={sortBy}
				onChange={(e) => {
					setSortBy(e.target.value);
				}}
			>
				<option value="recent">Recenti</option>
				<option value="price">Prezzo</option>
				<option value="name">Alfabetica</option>
			</select>

			<select
				className="form-select"
				value={category}
				onChange={(e) => {
					setCategory(e.target.value);
				}}
			>
				<option value={""}>Tutte le categorie</option>
				{categories.map((cat) => {
					return (
						<option key={cat.id} value={cat.name}>
							{cat.name}
						</option>
					);
				})}
			</select>

			<button
				type="button"
				className="btn btn-primary"
				onClick={() => {
					console.log(searchParams);
					if (order === "desc") {
						setOrder("asc");
					} else {
						setOrder("desc");
					}
				}}
			>
				{order === "desc" ? (
					<i className="bi bi-sort-down"></i>
				) : (
					<i className="bi bi-sort-up"></i>
				)}
			</button> */}

			<div className="btn-group me-1">
				<button
					type="button"
					className={`btn btn-primary ${sortBy === "price" ? "active" : ""}`}
					onClick={() => {
						console.log(searchParams);

						setSortBy("price");
					}}
				>
					Prezzo
				</button>

				<button
					type="button"
					className={`btn btn-primary ${sortBy === "name" ? "active" : ""}`}
					onClick={() => {
						console.log(searchParams);

						setSortBy("name");
					}}
				>
					Alfabetica
				</button>

				<button
					type="button"
					className={`btn btn-primary ${sortBy === "recent" ? "active" : ""}`}
					onClick={() => {
						console.log(searchParams);
						setSortBy("recent");
					}}
				>
					Recenti
				</button>
			</div>

			<div className="btn-group me-1">
				<button
					type="button"
					className={`btn btn-primary ${order === "asc" ? "active" : ""}`}
					onClick={() => {
						setOrder("asc");
					}}
				>
					Asc
				</button>

				<button
					type="button"
					className={`btn btn-primary ${order === "desc" ? "active" : ""}`}
					onClick={() => {
						console.log(searchParams);

						setOrder("desc");
					}}
				>
					Desc
				</button>
			</div>

			<button type="submit" className="btn btn-primary">
				Filtra
			</button>
		</form>
	);
}
