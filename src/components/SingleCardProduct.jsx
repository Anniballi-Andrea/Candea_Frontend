import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function SingleCardProduct({ product }) {
	const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

	const isLiked = (id) => {
		for (let i = 0; i < wishlist.length; i++) {
			if (wishlist[i].id === id) return true;
		}
		return false;
	};

	function capitalize(str) {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const categoryList = product.categories
		.map((cat) => capitalize(cat.name))
		.join(", ");

	return (
		<div className="product-col">
			<Link to={`/products/${product.slug}`} className="product-link">
				<div className="product-card">
					<div className="product-image-wrapper">
						<i
							className={`bi ${isLiked(product.id) ? "bi-suit-heart-fill" : "bi-suit-heart"}`}
							onClick={(e) => {
								e.preventDefault();
								if (isLiked(product.id)) {
									removeFromWishlist(product.id);
								} else {
									addToWishlist(product);
								}
							}}
						></i>
						<img
							src={`http://localhost:3000/${product.img}`}
							alt={product.name}
							className="product-image"
						/>
					</div>

					<div className="product-body">
						<div>
							<h5 className="product-title">{capitalize(product.name)}</h5>
							<p className="product-categories">{categoryList}</p>
						</div>
						{product.initial_price !== product.actual_price ? (
							<>
								<div className="product-price-init">€{product.initial_price}</div>
								<div className="product-price">€{product.actual_price}</div>
							</>
						) : (
							<>
								<div className="product-price">€{product.actual_price}</div>
							</>
						)}
					</div>
				</div>
			</Link>
		</div>
	);
}
