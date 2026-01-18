import { useCart } from "../context/CartContext";

export default function CartItems({ item }) {
	const { removeFromCart, updateQuantity } = useCart();

	function capitalize(str) {
		if (!str) return "";
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<div className="cart-item-row p-3 border rounded mb-3 shadow-sm bg-white">
			<div className="row align-items-center gy-3">
				<div className="col-4 col-md-2">
					<img
						src={`http://localhost:3000/${item.img}`}
						alt={item.name}
						className="cart-product-img img-fluid rounded"
					/>
				</div>
				<div className="col-8 col-md-4">
					<h6 className="fw-bold mb-1">{capitalize(item.name)}</h6>
					<p className="text-muted small mb-2">
						Prezzo unitario: €{Number(item.actual_price).toFixed(2)}
					</p>
				</div>
				<div className="col-12 col-md-3 text-md-end d-flex justify-content-md-end align-items-center gap-2">
					<button
						type="button"
						className="qty-btn btn btn-outline-secondary"
						onClick={() => updateQuantity(item.id, -1)}
						disabled={item.quantity <= 1}
					>
						−
					</button>
					<span className="fw-bold">{item.quantity}</span>
					<button
						type="button"
						className="qty-btn btn btn-outline-secondary"
						onClick={() => updateQuantity(item.id, 1)}
					>
						+
					</button>
				</div>
				<div className="col-12 col-md-3 text-end">
					<button
						type="button"
						className="btn btn-link text-danger p-0"
						onClick={() => removeFromCart(item.id)}
					>
						<i className="bi bi-trash3 fs-5"></i>
						<div className="small">rimuovi</div>
					</button>
				</div>
			</div>
		</div>
	);
}
