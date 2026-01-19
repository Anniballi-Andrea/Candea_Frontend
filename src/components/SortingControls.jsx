import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";

export default function SortingControls({ searchParams, setSearchParams }) {
	const [categories, setCategories] = useState([]);

	const [sortBy, setSortBy] = useState(
		searchParams?.get?.("sortBy") || "recent",
	);
	const [order, setOrder] = useState(searchParams?.get?.("order") || "asc");
	const [category, setCategory] = useState(
		searchParams?.get?.("category") || "",
	);
	const [promo, setPromo] = useState(searchParams?.get?.("promo") || "n");

	const { search, setSearch } = useSearch();

	useEffect(() => {
		setSearch(searchParams?.get?.("q") || "");
		axios
			.get("http://localhost:3000/api/categories")
			.then((res) => setCategories(res.data))
			.catch((err) => console.error("Errore categorie:", err));
	}, []);

	useEffect(() => {
		setSearchParams({ q: search, sortBy, order, category, promo });
	}, [search, sortBy, order, category, promo]);

	return (
		<div className="products-filter">
			{/* <h5 className="mt-2 me-1">Ordina per: </h5> */}

			<button
				type="button"
				className={`btn ${promo === "n" ? "btn-danger" : "btn-outline-danger"}`}
				onClick={() => {
					console.log(searchParams);
					if (promo === "n") {
						setPromo("y");
					} else {
						setPromo("n");
					}
				}}
			>
				{"IN OFFERTA"}
			</button>

			<select
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
			</button>

			{/* <div className="btn-group me-1">
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
			</button> */}
		</div>
	);
}
