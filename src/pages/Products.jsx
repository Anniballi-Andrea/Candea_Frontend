import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductShowcase from "../components/ProductShowcase";
import SortingControls from "../components/SortingControls";

export default function Products() {
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

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

	return (
		<div className="container p-5 text-center">
			<h1>Lista prodotti</h1>

			<SortingControls
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>

			<ProductShowcase title={""} products={products} />
		</div>
	);
}
