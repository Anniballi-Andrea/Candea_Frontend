import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductShowcase from "../components/ProductShowcase";

export default function CategoryProduct() {
	const [products, setProducts] = useState([]);
	const [searchParams] = useSearchParams();

	// Recuperiamo il nome della categoria dalla URL (es. ?category=Elettronica)
	const categoryName = searchParams.get("category");

	useEffect(() => {
		if (categoryName) {
			axios
				.get(`http://localhost:3000/api/products?category=${categoryName}`)
				.then((response) => {
					setProducts(response.data);
				})
				.catch((error) => {
					console.error("Errore nel recupero dei prodotti:", error);
				});
		}
	}, [categoryName]); // Usiamo categoryName come dipendenza

	return (
		<div className="container p-5 text-center">
			{/* Se categoryName esiste lo mostriamo, altrimenti usiamo un titolo generico */}
			<h1 className="text-capitalize">
				{categoryName ? `Prodotti: ${categoryName}` : "Tutte le Categorie"}
			</h1>
			<ProductShowcase products={products} />
		</div>
	);
}
