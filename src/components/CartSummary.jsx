import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartSummary({ cart, total, onCheckout }) {
	const { discountCode, setDiscountCode, orderData, setOrderData } = useCart();

	const [tempCode, setTempCode] = useState("");
	const [isDiscountValid, setIsDiscountValid] = useState(false);
	const [discountErrorMessage, setDiscountErrorMessage] = useState("");

	// Funzione per controllare il codice sconto
	function checkCode() {
		if (!tempCode) return;

		axios
			.get(`http://localhost:3000/api/discount/${tempCode}`)
			.then((res) => {
				setDiscountCode(res.data);
				setIsDiscountValid(true);
				setDiscountErrorMessage("");
			})
			.catch((err) => {
				console.error(err);
				setIsDiscountValid(false);
				setDiscountErrorMessage("Codice sconto non valido");
			});
	}

	const totalAfterDiscount = isDiscountValid
		? total - (total * discountCode.value) / 100
		: total;

	const shippingCost = total >= 90 ? 0 : 5;

	const subTotal = total + shippingCost;
	const totalPrice = totalAfterDiscount + shippingCost;

	useEffect(() => {
		setOrderData({ ...orderData, total: totalPrice });
	}, [totalPrice]);

	return (
		<div className="card border-0 bg-light p-4 shadow-sm">
			<h4 className="fw-bold mb-4">Riepilogo</h4>

			{/* Lista prodotti stile scontrino */}
			<div className="cart-summary-list mb-3">
				{cart.map((item) => (
					<div
						key={item.id}
						className="d-flex justify-content-between align-items-center mb-2"
					>
						<div style={{ wordBreak: "break-word" }}>
							<span className="fw-bold">{item.name}</span>
							<span className="text-muted ms-2">x{item.quantity}</span>
						</div>
						<div>€{(Number(item.actual_price) * item.quantity).toFixed(2)}</div>
					</div>
				))}
			</div>

			<div className="d-flex justify-content-between">
				<p className="fw-bold">Spedizione:</p>
				{shippingCost === 0 ? (
					<p className="text-success fw-bold">GRATUITA</p>
				) : (
					<p>€{shippingCost.toFixed(2)}</p>
				)}
			</div>

			<hr />

			{/* Subtotale */}
			<div className="d-flex justify-content-between mb-3">
				<span>Subtotale</span>
				<span>€{subTotal.toFixed(2)}</span>
			</div>

			{/* Input Codice Sconto */}
			<div className="d-flex align-items-center mb-3 gap-2">
				<div className="flex-grow-1">
					<input
						type="text"
						value={tempCode}
						onChange={(e) => setTempCode(e.target.value)}
						placeholder="Inserisci codice"
						className="form-control form-control-sm"
					/>
				</div>
				<button
					type="button"
					className="btn btn-dark btn-sm"
					onClick={checkCode}
				>
					Invia
				</button>
			</div>

			{isDiscountValid ? (
				<div className="text-success mb-2 small">
					Codice <strong>{discountCode.code}</strong> applicato:{" "}
					{discountCode.value}% di sconto inserito
				</div>
			) : (
				""
			)}
			<div className="text-danger mb-2 small">{discountErrorMessage}</div>

			<div className="d-flex justify-content-between mb-3 fw-bold fs-5 border-top pt-3">
				<span>Totale</span>
				<span>€{Math.max(0, totalPrice).toFixed(2)}</span>
			</div>

			<button
				type="button"
				className="btn btn-dark w-100 btn-lg mt-3"
				onClick={onCheckout}
			>
				Procedi al Checkout
			</button>
		</div>
	);
}
