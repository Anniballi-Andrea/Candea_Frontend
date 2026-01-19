import axios from "axios";
import { useEffect, useState } from "react";
import Bunner from "../components/Bunner";
import ProductShowcase from "../components/ProductShowcase";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [bestSellers, setBestSellers] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/products?sortBy=recent&order=desc`)
			.then((res) => setProducts(res.data))
			.catch((err) => console.error("Errore prodotti: ", err));

		axios
			.get("http://localhost:3000/api/products/bySold")
			.then((res) => setBestSellers(res.data))
			.catch((err) => console.error("Errore bestsellers: ", err));
	}, []);

	return (
		<>
			<Bunner />
			<div className="container">

				<ProductShowcase
					products={bestSellers.slice(0, 4)}
					title={"Più venduti"}
				/>
				
				<ProductShowcase
					products={products.slice(0, 4)}
					title={"Ultimi arrivi"}
				/>
			</div>
		</>
	);
}
