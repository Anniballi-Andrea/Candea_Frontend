import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import SingleCardProduct from "../components/SingleCardProduct";

export default function Products() {
	const [searchParams, setSearchParams] = useSearchParams();

	const [products, setProducts] = useState([]);

	const [sortBy, setSortBy] = useState("recent");
	const [order, setOrder] = useState("asc");

	const { search } = useSearch();

	// console.log("URL SEARCH:", search);

	useEffect(() => {
		const endpoint = `http://localhost:3000/api/products`;

		axios
			.get(endpoint, { params: searchParams })
			.then((res) => {
				setProducts(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [searchParams]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setSearchParams({ name: search, sortBy, order });
	};

	return (
		<div className="container p-5 text-center">
			<h1>Lista prodotti</h1>

			<form className="d-flex" onSubmit={handleSubmit}>
				<h4>Ordina per: </h4>
				<button
					type="button"
					onClick={() => {
						console.log(searchParams);

						setSortBy("price");
					}}
				>
					Prezzo
				</button>
				<button
					type="button"
					onClick={() => {
						console.log(searchParams);

						setSortBy("name");
					}}
				>
					Alfabetica
				</button>
				<button
					type="button"
					onClick={() => {
						console.log(searchParams);
						setSortBy("recent");
					}}
				>
					Recenti
				</button>
				<button
					type="button"
					onClick={() => {
						setOrder("asc");
					}}
				>
					Asc
				</button>
				<button
					type="button"
					onClick={() => {
						console.log(searchParams);

						setOrder("desc");
					}}
				>
					Desc
				</button>

				<button type="submit">Filtra</button>
			</form>

			<div className="my-3 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
				{products
					? products.map((prod, i) => (
							<SingleCardProduct key={i} product={prod} />
						))
					: ""}
			</div>
		</div>
	);
}
