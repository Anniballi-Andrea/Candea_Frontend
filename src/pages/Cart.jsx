import { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import CheckoutForm from "../components/CheckoutForm";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, clearCart } = useCart();
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

    // Calcolo totale generale per passarlo al Riepilogo
    const total = cart.reduce(
        (acc, item) => acc + Number(item.initial_price) * item.quantity,
        0
    );

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
                        {/* COLONNA LISTA PRODOTTI */}
                        <div className="col-lg-8">
                            {cart.map(item => (
                                <CartItems key={item.id} item={item} />
                            ))}

                            <button
                                className="btn btn-link text-muted mt-2 p-0"
                                onClick={clearCart}
                            >
                                Svuota carrello
                            </button>
                        </div>

                        {/* COLONNA RIEPILOGO */}
                        <div className="col-lg-4">
                            <CartSummary
                                cart={cart}
                                total={total}
                                onCheckout={() => setIsCheckoutVisible(true)}
                            />
                        </div>
                    </div>

                    {/* SEZIONE CHECKOUT */}
                    <div className={`checkout-section-wrapper ${isCheckoutVisible ? 'show' : ''} mt-5`}>
                        {isCheckoutVisible && <CheckoutForm />}
                    </div>
                </>
            )}
        </div>
    );
}