import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
    const { slug } = useParams();
    const { cart, addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products/${slug}`)
            .then(response => {
                const data = response.data;
                setProduct(data);

                // Calcolo iniziale disponibilità reale (DB - Carrello)
                const inCart = cart.find(item => item.id === data.id);
                const qtyInCart = inCart ? inCart.quantity : 0;
                const realAvailable = data.available_quantity - qtyInCart;

                // Se non c'è più nulla, il contatore parte da 0, altrimenti da 1
                setQuantity(realAvailable <= 0 ? 0 : 1);
            })
            .catch(err => console.error("Errore recupero prodotto:", err));
    }, [slug, cart]);

    // --- LOGICA DI CALCOLO MATEMATICA ---

    // 1. Quanti ne ha già messi nel carrello
    const alreadyInCart = product ? (cart.find(item => item.id === product.id)?.quantity || 0) : 0;

    // 2. DISPONIBILITÀ RESIDUA TOTALE 
    // (Magazzino totale - Già nel carrello - Quelli selezionati ora con + e -)
    const currentStockDisplay = product ? (product.available_quantity - alreadyInCart - quantity) : 0;

    // Massimo selezionabile in questo momento
    const maxSelectableNow = product ? (product.available_quantity - alreadyInCart) : 0;

    const increaseQty = () => {
        if (quantity < maxSelectableNow) {
            setQuantity(prev => prev + 1);
        }
    };

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleAdd = () => {
        if (quantity > 0 && quantity <= maxSelectableNow) {
            addToCart(product, quantity);
            setShowSuccess(true);

            // Dopo l'invio, resetto la selezione a 1 (se ne rimangono) o 0
            const remainingAfterPush = maxSelectableNow - quantity;
            setQuantity(remainingAfterPush > 0 ? 1 : 0);

            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    if (!product) return <div className="container p-5 text-center">Caricamento...</div>;

    return (
        <div className="container my-5 py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <div className="ratio ratio-1x1 bg-white border shadow-sm rounded">
                        <img src={`http://localhost:3000/${product.img}`} alt={product.name} className="object-fit-contain p-4" />
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{product.name.toUpperCase()}</h1>
                    <p className="text-secondary mb-4">{product.description}</p>

                    <div className="mb-4">
                        {/* UNICA SCRITTA DISPONIBILITÀ CHE DECREMENTA SEMPRE */}
                        {maxSelectableNow > 0 ? (
                            <span className={`fw-bold text-uppercase small ${currentStockDisplay === 0 ? 'text-danger' : 'text-muted'}`}>
                                Disponibilità magazzino: {currentStockDisplay} PZ
                            </span>
                        ) : (
                            <span className="fw-bold text-danger text-uppercase small">
                                Prodotto esaurito
                            </span>
                        )}
                    </div>

                    <hr />

                    <div className="d-flex align-items-center gap-4 my-5">
                        <div className="d-flex border rounded bg-white">
                            <button onClick={decreaseQty} className="btn px-3" disabled={quantity <= 1}>-</button>
                            <span className="px-4 py-2 fw-bold border-start border-end" style={{ minWidth: '60px', textAlign: 'center' }}>
                                {quantity}
                            </span>
                            <button onClick={increaseQty} className="btn px-3" disabled={quantity >= maxSelectableNow}>+</button>
                        </div>
                        <h2 className="mb-0 fw-bold">
                            €{(quantity * parseFloat(product.initial_price)).toFixed(2)}
                        </h2>
                    </div>

                    <div className="position-relative">
                        <button
                            className="btn btn-dark btn-lg w-100 py-3 fw-bold"
                            onClick={handleAdd}
                            disabled={maxSelectableNow <= 0 || quantity === 0}
                        >
                            {maxSelectableNow <= 0 ? "NON DISPONIBILE" : "AGGIUNGI AL CARRELLO"}
                        </button>

                        {showSuccess && (
                            <div className="alert alert-success mt-3 text-center py-2 animate__animated animate__fadeIn">
                                <i className="bi bi-check2-circle me-2"></i> Prodotto aggiunto correttamente!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}