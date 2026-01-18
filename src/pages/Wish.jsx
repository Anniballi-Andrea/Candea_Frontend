import { Link } from "react-router-dom";
import ProductShowcase from "../components/ProductShowcase";
import { useWishlist } from "../context/WishlistContext";

export default function Wish() {
	const { wishlist } = useWishlist();

	return (
		<div className="container my-5 py-5">
			<h2 className="mb-5 fw-bold text-center">LA TUA WISHLIST</h2>
			{wishlist.length === 0 ? (
				<div className="text-center py-5 border rounded bg-light">
					<p className="fs-4 text-muted">La tua wishlist è vuota</p>
					<Link to="/" className="btn btn-dark px-4 mt-3">
						Inizia lo shopping
					</Link>
				</div>
			) : (
				<ProductShowcase title={""} products={wishlist} />
			)}
		</div>
	);
}
