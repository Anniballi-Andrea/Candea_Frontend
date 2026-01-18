import { useContext } from "react";
import Bunner from "../components/Bunner";
import ProductList from "../components/ProductList";
import { ProductsContext } from "../context/ProductContext";

export default function Home() {
	const { products, bestSellers } = useContext(ProductsContext);

	return (
		<>
			<Bunner />
			<ProductList products={products} bestSellers={bestSellers} />
		</>
	);
}
