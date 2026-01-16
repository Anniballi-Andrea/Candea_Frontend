import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SingleCardProduct from "../components/SingleCardProduct";
import { useSearch } from "../context/SearchContext";

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

			<form

				className="products-filter d-flex justify-content-center align-items-center"
				onSubmit={handleSubmit}>

				<h5 className="mt-2 me-1">Ordina per: </h5>
				<div className="btn-group me-1">
					<button
						type="button"
						className={`btn btn-primary ${sortBy === "price" ? "active" : ""}`}
						onClick={() => {
							console.log(searchParams);

							setSortBy("price");
						}}>

						Prezzo
					</button>

					<button
						type="button"
						className={`btn btn-primary ${sortBy === "name" ? "active" : ""}`}
						onClick={() => {
							console.log(searchParams);

							setSortBy("name");
						}}>

						Alfabetica
					</button>

					<button
						type="button"
						className={`btn btn-primary ${sortBy === "recent" ? "active" : ""}`}
						onClick={() => {
							console.log(searchParams);
							setSortBy("recent");
						}}>

						Recenti
					</button>

				</div>

				<div className="btn-group me-1">
					<button
						type="button"
						className={`btn btn-primary ${order === "asc" ? "active" : ""}`}
						onClick={() => {
							setOrder("asc");
						}}>

						Asc

					</button>

					<button
						type="button"
						className={`btn btn-primary ${order === "desc" ? "active" : ""}`}
						onClick={() => {
							console.log(searchParams);

							setOrder("desc");
						}}>

						Desc

					</button>

				</div>

				<button type="submit" className="btn btn-primary">
					Filtra
				</button>

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
