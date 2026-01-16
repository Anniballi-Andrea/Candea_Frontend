import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function CartSummary({ cart, total, setCode, onCheckout, code }) {
	const { discount_code, setDiscount_Code, orderData, SetOrderData } = useCart()

	const [tempCode, setTempCode] = useState("");
	const [discount, setDiscount] = useState(false);
	const [discountCode, setDiscountCode] = useState("");

	// Funzione per controllare il codice sconto
	function controlCode() {
		if (!tempCode) return;

		axios
			.get(`http://localhost:3000/api/discount/${tempCode}`)
			.then((res) => {
				setDiscountCode(res.data.code);
				setDiscount_Code(res.data);
				setDiscount(res.data.value);
				setCode(res.data);
				//console.log(discountCode, discount, code);
			})
			.catch((err) => {
				console.error(err);
				alert("Codice sconto non valido");
				setDiscount(false);
				setDiscountCode("");
			});
	}

	const totalAfterDiscount = discount
		? total - (total * discount) / 100
		: total;

	const shippingCost = total >= 90 ? 0 : 5;

	const subtotal = Number(total);
	const shipping = Number(shippingCost);
	const grandTotal = subtotal + shipping;
	const totalPrice = Number(totalAfterDiscount) + shipping

	useEffect(() => { SetOrderData({ ...orderData, total: totalPrice }) }, [totalPrice])

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
						<div>
							€{(Number(item.actual_price) * item.quantity).toFixed(2)}
						</div>
					</div>
				))}
			</div>

			<div className="d-flex justify-content-between">
				<p className="fw-bold">Spedizione:</p>
				{shippingCost === 0 ? <p className="text-success fw-bold">GRATUITA</p> : <p>€{shippingCost.toFixed(2)}</p>}
			</div>

			<hr />

			{/* Subtotale */}
			<div className="d-flex justify-content-between mb-3">
				<span>Subtotale</span>
				<span>€{grandTotal.toFixed(2)}</span>
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
				<button className="btn btn-dark btn-sm" onClick={controlCode}>
					Invia
				</button>
			</div>

			{discount && (
				<div className="text-success mb-2 small">
					Codice <strong>{discount_code.code}</strong> applicato: {discount_code.value}% di
					sconto inserito
				</div>
			)}

			<div className="d-flex justify-content-between mb-3 fw-bold fs-5 border-top pt-3">
				<span>Totale</span>
				<span>€{Math.max(0, totalPrice).toFixed(2)}</span>
			</div>

			<button className="btn btn-dark w-100 btn-lg mt-3" onClick={onCheckout}>
				Procedi al Checkout
			</button>
		</div>
	);
}
