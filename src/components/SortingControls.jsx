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
			<button
				type="button"
				className={`btn ${promo === "y" ? "active" : ""}`}
				onClick={() => setPromo(promo === "n" ? "y" : "n")}
			>
				IN OFFERTA
			</button>


			<select
				id="sort-by"
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
		</div>
	);
}
