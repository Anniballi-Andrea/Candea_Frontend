import axios from "axios"; // <-- assicurati di importare axios
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

    // Nuovi state per codice sconto
    const [tempCode, setTempCode] = useState("");
    const [discount, setDiscount] = useState(false);
    const [discount_Code, setDiscount_Code] = useState(""); // per salvare il codice sconto valido

    // Calcolo totale generale
    const total = cart.reduce(
        (acc, item) => acc + Number(item.initial_price) * item.quantity,
        0
    );

    // Funzione per controllare il codice sconto
    function controlCode() {
        if (!tempCode) return;

        axios.get(`http://localhost:3000/api/discount/${tempCode}`)
            .then((res) => {
                setDiscount_Code(res.data.code);
                setDiscount(res.data.value);
            })
            .catch((err) => {
                console.log(err);
                alert("Codice sconto non valido");
                setDiscount(false);
                setDiscount_Code("");
            });
    }

    // Totale con sconto
    const totalAfterDiscount = discount ? total - discount : total;

    return (
        <div className="container my-5 py-5">
            <h2 className="mb-5 fw-bold text-center">IL TUO CARRELLO</h2>

            {cart.length === 0 ? (
                <div className="text-center py-5 border rounded bg-light">
                    <p className="fs-4 text-muted">Il carrello è attualmente vuoto.</p>
                    <Link to="/" className="btn btn-dark px-4 mt-3">Inizia lo shopping</Link>
                </div>
            ) : (
                <>
                    <div className="row g-4">
                        {/* LISTA PRODOTTI */}
                        <div className="col-lg-8">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item-row p-3 border rounded mb-3 shadow-sm bg-white">
                                    <div className="row align-items-center gy-3">
                                        <div className="col-4 col-md-2">
                                            <img
                                                src={`http://localhost:3000/${item.img}`}
                                                alt={item.name}
                                                className="img-fluid rounded"
                                                style={{ maxHeight: '80px', objectFit: 'contain' }}
                                            />
                                        </div>
                                        <div className="col-8 col-md-4">
                                            <h6 className="fw-bold mb-1">{item.name}</h6>
                                            <p className="text-muted small mb-2">
                                                Prezzo unitario: €{Number(item.initial_price).toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-3 text-md-end d-flex justify-content-md-end align-items-center gap-2">
                                            <button
                                                className="qty-btn btn btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, -1)}
                                                disabled={item.quantity <= 1}
                                            >−</button>
                                            <span className="fw-bold">{item.quantity}</span>
                                            <button
                                                className="qty-btn btn btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >+</button>
                                        </div>
                                        <div className="col-12 col-md-3 text-end">
                                            <button
                                                className="btn btn-link text-danger p-0"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <i className="bi bi-trash3 fs-5"></i>
                                                <div className="small">rimuovi</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button className="btn btn-link text-muted mt-2 p-0" onClick={clearCart}>
                                Svuota carrello
                            </button>
                        </div>

                        {/* RIEPILOGO STILE SCONTRINO */}
                        <div className="col-lg-4">
                            <div className="card border-0 bg-light p-4 shadow-sm">
                                <h4 className="fw-bold mb-4">Riepilogo</h4>

                                {/* Lista prodotti con nomi completi */}
                                <div className="cart-summary-list mb-3">
                                    {cart.map(item => (
                                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                                            <div style={{ wordBreak: 'break-word' }}>
                                                <span className="fw-bold">{item.name}</span>
                                                <span className="text-muted ms-2">x{item.quantity}</span>
                                            </div>
                                            <div>
                                                €{(Number(item.initial_price) * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <hr />

                                {/* Totale */}
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotale</span>
                                    <span>€{total.toFixed(2)}</span>
                                </div>

                                {/* CODICE SCONTO */}
                                <div className="d-flex align-items-center mb-3 gap-2">
                                    <div className="flex-grow-1">
                                        <input
                                            type="text"
                                            value={tempCode}
                                            onChange={(e) => setTempCode(e.target.value)}
                                            placeholder="Inserisci codice sconto"
                                            className="form-control form-control-sm"
                                        />
                                    </div>
                                    <div>
                                        <button className="btn btn-dark btn-sm" onClick={controlCode}>
                                            Invia
                                        </button>
                                    </div>
                                </div>

                                {discount && (
                                    <div className="text-success mb-2">
                                        Codice sconto applicato: -€{discount.toFixed(2)}
                                    </div>
                                )}

                                <div className="d-flex justify-content-between mb-3 fw-bold fs-5">
                                    <span>Totale</span>
                                    <span>€{totalAfterDiscount.toFixed(2)}</span>
                                </div>

                                {/* Pulsante Checkout */}
                                <button
                                    className="btn btn-dark w-100 btn-lg mt-3"
                                    onClick={() => setIsCheckoutVisible(true)}
                                >
                                    Procedi al Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* FORM CHECKOUT */}
                    <div className={`checkout-section-wrapper ${isCheckoutVisible ? 'show' : ''}`}>
                        <CheckoutForm />
                    </div>
                </>
            )}
        </div>
    );
}
