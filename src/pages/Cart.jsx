import CheckoutForm from "../components/CheckoutForm";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import axios from "axios";

export default function Cart() {
    const { cart, removeFromCart, clearCart, setDiscount_Code, discount_code } = useCart();
    const [tempCode, setTempCode] = useState("")
    const [discount, setDiscount] = useState(false)

    function controlCode() {
        axios.get(`http://localhost:3000/api/discount/${tempCode}`)
            .then((res) => {
                console.log(res.data.value)
                //setDiscount_Code(res.data.code)
                //setDiscount(res.data.value)

            })
            .catch((err) => {
                console.log(err)
            })
    }


    const total = cart.reduce((acc, item) => acc + (item.initial_price * item.quantity), 0);

    // Funzione per calcolare date fittizie di consegna
    const getDeliveryDates = () => {
        const today = new Date();
        const delivery = new Date();
        delivery.setDate(today.getDate() + 3);

        const options = { day: '2-digit', month: 'short' };
        return {
            start: today.toLocaleDateString('it-IT', options),
            end: delivery.toLocaleDateString('it-IT', options)
        };
    };

    const dates = getDeliveryDates();

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
                            <div key={item.id} className="cart-item-row p-3 border rounded mb-3 shadow-sm bg-white">
                                <div className="row align-items-center">
                                    {/* Immagine Prodotto */}
                                    <div className="col-2">
                                        <img
                                            src={`http://localhost:3000/${item.img}`}
                                            alt={item.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '80px', objectFit: 'contain' }}
                                        />
                                    </div>

                                    {/* Info Prodotto */}
                                    <div className="col-3">
                                        <h6 className="fw-bold mb-0">{item.name.toUpperCase()}</h6>
                                        <p className="text-muted small mb-0">Quantità: {item.quantity}</p>
                                        <p className="fw-bold mb-0">€{(item.initial_price * item.quantity).toFixed(2)}</p>
                                    </div>

                                    {/* Tragitto Spedizione (Il tuo Design) */}
                                    <div className="col-5">
                                        <div className="shipping-tracker px-3">
                                            <div className="d-flex justify-content-between mb-2">
                                                <div className="text-start">
                                                    <span style={{ fontSize: '0.65rem', color: 'var(--green-dark)', opacity: 0.7, display: 'block', fontWeight: '600' }}>PARTENZA</span>
                                                    <strong style={{ color: 'var(--green-text)', fontSize: '0.85rem' }}>{dates.start}</strong>
                                                </div>
                                                <div className="text-end">
                                                    <span style={{ fontSize: '0.65rem', color: 'var(--green-dark)', opacity: 0.7, display: 'block', fontWeight: '600' }}>ARRIVO</span>
                                                    <strong style={{ color: 'var(--green-text)', fontSize: '0.85rem' }}>{dates.end}</strong>
                                                </div>
                                            </div>

                                            <div className="position-relative d-flex align-items-center" style={{ height: '24px' }}>
                                                {/* Linea di fondo (grigio chiarissimo o il tuo bg-light) */}
                                                <div className="w-100" style={{ height: '2px', backgroundColor: '#e0e0e0', position: 'absolute' }}></div>

                                                {/* Linea del progresso (Verde scuro per visibilità) */}
                                                <div style={{
                                                    height: '2px',
                                                    backgroundColor: 'var(--green-dark)',
                                                    width: '40%',
                                                    position: 'absolute',
                                                    zIndex: 1
                                                }}></div>

                                                {/* Icona Camioncino */}
                                                <div className="position-absolute" style={{ left: '40%', transform: 'translateX(-50%)', zIndex: 2 }}>
                                                    <div style={{ backgroundColor: '#fff', padding: '0 4px' }}>
                                                        <i className="bi bi-truck fs-5" style={{ color: 'var(--green-dark)' }}></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-center fw-bold mt-1 mb-0" style={{ fontSize: '0.6rem', color: 'var(--green-dark)', letterSpacing: '1.5px' }}>
                                                IN TRANSITO
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottone Rimuovi */}
                                    <div className="col-2 text-end">
                                        <button
                                            className="btn btn-link text-danger p-0"
                                            onClick={() => removeFromCart(item.id)}
                                            title="Rimuovi"
                                        >
                                            <i className="bi bi-trash3 fs-5"></i>
                                            <div className="small">remove</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className="btn btn-link text-muted mt-2 p-0" onClick={clearCart}>Svuota carrello</button>
                    </div>

                    {/* Riepilogo (Rimane uguale) */}
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
                            <div className="d-flex align-items-center">
                                <div>
                                    <input
                                        type="text"
                                        value={tempCode}
                                        onChange={(e) => setTempCode(e.target.value)}
                                        placeholder="invia codice sconto" />
                                </div>
                                <div>
                                    <button className="btn btn-dark w-100 btn-sm " onClick={controlCode}>Invia</button>
                                </div>
                            </div>
                            <button className="btn btn-dark w-100 btn-lg mt-3">Procedi al Checkout</button>
                        </div>
                    </div>
                </div>
            )}
            <CheckoutForm cart={cart} />
        </div>


    );
}