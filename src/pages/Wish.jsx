import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useEffect } from "react";
import SingleCardProduct from "../components/SingleCardProduct";

export default function Wish() {
	const { wishlist, removeFromWishlist } = useWishlist();

	return (
		<div className="container my-5 py-5">
			<h2 className="mb-5 fw-bold text-center">LA TUA WISHLIST</h2>
			{wishlist.lenght === 0 ? (
				<div className="text-center py-5 border rounded bg-light">
					<p className="fs-4 text-muted">La tua wishlist è vuota</p>
					<Link to="/" className="btn btn-dark px-4 mt-3">
						Inizia lo shopping
					</Link>
				</div>
			) : (
				<div className="row g-4">
					<div className="col-lg-8">
						{wishlist.map((product) => (
							<SingleCardProduct product={product}></SingleCardProduct>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
