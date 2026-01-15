import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + (item.initial_price * item.quantity), 0);

    return (
        <div className="container my-5 py-5">
            <h2 className="mb-5 fw-bold text-center">IL TUO CARRELLO</h2>

            {cart.length === 0 ? (
                <div className="text-center py-5 border rounded bg-light">
                    <p className="fs-4 text-muted">Il carrello è attualmente vuoto.</p>
                    <Link to="/" className="btn btn-dark px-4 mt-3">Inizia lo shopping</Link>
                </div>
            ) : (
                <div className="row g-4">
                    <div className="col-lg-8">
                        {cart.map((item) => (
                            <div key={item.id} className="d-flex align-items-center border-bottom py-4">
                                <img src={`http://localhost:3000/${item.img}`} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                <div className="ms-4 flex-grow-1">
                                    <h5 className="fw-bold mb-1">{item.name.toUpperCase()}</h5>
                                    <p className="text-muted small mb-0">Quantità: {item.quantity}</p>
                                    <p className="fw-bold mt-2">€{(item.initial_price * item.quantity).toFixed(2)}</p>
                                </div>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                                    Rimuovi
                                </button>
                            </div>
                        ))}
                        <button className="btn btn-link text-muted mt-3 p-0" onClick={clearCart}>Svuota carrello</button>
                    </div>

                    <div className="col-lg-4">
                        <div className="card border-0 bg-light p-4 shadow-sm">
                            <h4 className="fw-bold mb-4">Riepilogo</h4>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotale</span>
                                <span>€{total.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 fw-bold fs-5">
                                <span>Totale</span>
                                <span>€{total.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-dark w-100 btn-lg mt-3">Procedi al Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}