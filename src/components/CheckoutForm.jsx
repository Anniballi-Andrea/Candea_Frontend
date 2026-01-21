import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
	const { cart, clearCart, discountCode, orderData, setOrderData, } = useCart();

	const [cardNumber, setCardNumber] = useState("")
	const [validThhru, setValidThhru] = useState("")
	const [cvv, setCvv] = useState("")
	const [errMessage, setErrMeassage] = useState("")

	const initialCheckoutForm = {
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		city: "",
		province: "",
		street: "",
		street_number: "",
		zip_code: "",
		discount_code_id: discountCode.id || null,
	};

	const [checkoutForm, setCheckoutForm] = useState(initialCheckoutForm);

	const navigate = useNavigate();

	// Gestore universale per tutti gli input
	const handleChange = (e) => {
		const { id, value } = e.target;
		setCheckoutForm({
			...checkoutForm,
			[id]: value,
		});
	};
	const [showOrder, setShowOrder] = useState(false)
	function handleSubmit(e) {
		e.preventDefault();
		//console.log("Dati inviati:", checkoutForm);

		let date = validThhru
		let month = date.slice(0, 2)
		let year = date.slice(3)
		let now = Date.now()
		let exp = Date.UTC(`20${year}`, month - 1)

		if (date.length > 5 || month < 1 || month > 12 || now > exp) {
			setValidThhru("")
			setErrMeassage("Inserire una data valida")
			return
		}

		const products = cart.map((product) => {
			return {
				id: product.id,
				quantity: product.quantity,
			};
		});

		const data = {
			...checkoutForm,
			discount_code_id: discountCode.id,
			products,
		};

		axios
			.post(`http://localhost:3000/api/orders`, data)
			.then((res) => {
				setShowOrder(true)
				setOrderData({ ...orderData, ...data, cart, showOrder });
				setCheckoutForm(initialCheckoutForm);
				clearCart();
				navigate("/summary_order");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const validateCardNum = (e) => {
		if (e.target.value.length <= 16 && Number.isInteger(Number(e.target.value))) {
			setCardNumber(e.target.value)
		}

	}

	const valiDate = (e) => {
		let date = e.target.value
		if (date.length === 3 && validThhru.length < e.target.value.length) {
			setValidThhru(validThhru + "/")
		} else if (date.length <= 5) {
			setValidThhru(e.target.value)
		}
	}

	const validateCvv = (e) => {
		if (e.target.value.length <= 3 && Number.isInteger(Number(e.target.value))) {
			setCvv(e.target.value)
		}
	}

	return (
		<div className="container mt-5 mb-5">
			<div className="checkout-card">
				<h2 className="checkout-title">Completamento Ordine</h2>

				<form onSubmit={handleSubmit}>
					<div className="row g-4">
						{/* --- SEZIONE ANAGRAFICA --- */}
						<div className="col-md-6">
							<label htmlFor="first_name" className="custom-label">
								Nome *
							</label>
							<input
								type="text"
								id="first_name"
								className="custom-input"
								placeholder="Es: Mario"
								value={checkoutForm.first_name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-6">
							<label htmlFor="last_name" className="custom-label">
								Cognome *
							</label>
							<input
								type="text"
								id="last_name"
								className="custom-input"
								placeholder="Es: Rossi"
								value={checkoutForm.last_name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-8">
							<label htmlFor="email" className="custom-label">
								E-mail *
							</label>
							<input
								type="email"
								id="email"
								className="custom-input"
								placeholder="mario.rossi@esempio.it"
								value={checkoutForm.email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-4">
							<label htmlFor="phone_number" className="custom-label">
								Cellulare *
							</label>
							<input
								type="tel"
								id="phone_number"
								className="custom-input"
								placeholder="333 0000000"
								value={checkoutForm.phone_number}
								onChange={handleChange}
								required
							/>
						</div>

						{/* --- SEZIONE INDIRIZZO --- */}
						<div className="col-md-6">
							<label htmlFor="city" className="custom-label">
								Città *
							</label>
							<input
								type="text"
								id="city"
								className="custom-input"
								placeholder="Es: Milano"
								value={checkoutForm.city}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-3">
							<label htmlFor="province" className="custom-label">
								Provincia *
							</label>
							<input
								type="text"
								id="province"
								className="custom-input"
								placeholder="MI"
								maxLength="2"
								value={checkoutForm.province}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-3">
							<label htmlFor="zip_code" className="custom-label">
								CAP *
							</label>
							<input
								type="text"
								id="zip_code"
								className="custom-input"
								placeholder="20100"
								value={checkoutForm.zip_code}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-9">
							<label htmlFor="street" className="custom-label">
								Via / Piazza *
							</label>
							<input
								type="text"
								id="street"
								className="custom-input"
								placeholder="Es: Via Roma"
								value={checkoutForm.street}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="col-md-3">
							<label htmlFor="street_number" className="custom-label">
								N. Civico *
							</label>
							<input
								type="number"
								id="street_number"
								className="custom-input"
								placeholder="10"
								value={checkoutForm.street_number}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="card-number" className="custom-label">
								Numero carta *
							</label>
							<input
								type="text"
								id="card-number"
								className="custom-input"
								placeholder="4023 **** **** ****"
								value={cardNumber}
								onChange={validateCardNum}
								required
							/>

						</div>
						<div className="col-md-4">
							<label htmlFor="valid-thhru" className="custom-label">
								Scadenza carta *
							</label>
							<input
								type="text"
								id="valid-thhru"
								className="custom-input"
								placeholder="MM/AA"
								value={validThhru}
								onChange={valiDate}
								required
							/>
							<div>
								<span className="text-danger">{errMessage}</span>
							</div>
						</div>
						<div className="col-md-2">
							<label htmlFor="cvv" className="custom-label">
								CVV *
							</label>
							<input
								type="text"
								id="cvv"
								className="custom-input"
								placeholder="***"
								value={cvv}
								onChange={validateCvv}
								required
							/>

						</div>
					</div>
					<div className="custom-label mt-2">* DATI OBBLIGATORI</div>

					{/* --- BOTTONE INVIO --- */}
					<div className="row mt-4">
						<div className="col-md-6 mx-auto">
							<button type="submit" className="btn-checkout-submit">
								EFFETTUA L'ORDINE
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
