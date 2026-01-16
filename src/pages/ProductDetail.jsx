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

                // Calcolo disponibilità iniziale considerando il carrello
                const inCart = cart.find(item => item.id === data.id);
                const qtyInCart = inCart ? inCart.quantity : 0;
                const realAvailable = data.available_quantity - qtyInCart;

                setQuantity(realAvailable <= 0 ? 0 : 1);
            })
            .catch(err => console.error("Errore:", err));
    }, [slug, cart]);

    // --- LOGICA RIGIDA DI CALCOLO ---
    const alreadyInCart = product ? (cart.find(item => item.id === product.id)?.quantity || 0) : 0;
    const maxSelectableNow = product ? (product.available_quantity - alreadyInCart) : 0;

    // Numero dinamico che decrementa mentre l'utente preme "+"
    const currentStockDisplay = product ? (product.available_quantity - alreadyInCart - quantity) : 0;

    const increaseQty = () => {
        if (quantity < maxSelectableNow) setQuantity(prev => prev + 1);
    };

    const decreaseQty = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleAdd = () => {
        if (quantity > 0 && quantity <= maxSelectableNow) {
            addToCart(product, quantity);
            setShowSuccess(true);
            const nextAvailable = maxSelectableNow - quantity;
            setQuantity(nextAvailable > 0 ? 1 : 0);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };

    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!product) return <div className="container p-5 text-center">Caricamento...</div>;

    return (
        <div className="container my-5 py-5">
            <div className="row g-5">
                {/* COLONNA IMMAGINE */}
                <div className="col-md-6">
                    <div className="ratio ratio-1x1 bg-white mb-3 border shadow-sm rounded">
                        <img
                            src={`http://localhost:3000/${product.img}`}
                            alt={product.name}
                            className="object-fit-contain p-4"
                        />
                    </div>
                </div>

                {/* COLONNA DETTAGLI */}
                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{capitalize(product.name)}</h1>

                    {/* Dati recuperati: Dimensioni */}
                    <p className="text-muted fs-5">{product.dimensions}</p>

                    <p className="my-4 text-secondary">{product.description}</p>

                    {/* Dati recuperati: Sentori, Durata, Colore */}
                    <div className="product-info-list mb-4">
                        <p className="mb-1 text-secondary"><strong>Sentori di:</strong> {product.scent}</p>
                        <p className="mb-1 text-secondary"><strong>Durata:</strong> {product.burn_time}</p>
                        <p className="mb-1 text-secondary"><strong>Colore:</strong> {product.color}</p>
                    </div>

                    <hr />

                    {/* DISPONIBILITÀ DINAMICA */}
                    <div className="mb-4">
                        {maxSelectableNow > 0 ? (
                            <span className={`fw-bold text-uppercase small ${currentStockDisplay === 0 ? 'text-danger' : 'text-muted'}`}>
                                Disponibilità magazzino: {currentStockDisplay} PZ
                            </span>
                        ) : (
                            <span className="fw-bold text-danger text-uppercase small">
                                Esaurito o limite raggiunto
                            </span>
                        )}
                    </div>

                    {/* SELETTORE QUANTITÀ */}
                    <div className="d-flex align-items-center gap-4 my-5">
                        <span className="fw-bold text-uppercase small">Quantità</span>
                        <div className="d-flex border align-items-center bg-white shadow-sm">
                            <button onClick={decreaseQty} className="btn px-3 fw-bold" disabled={quantity <= 1}>-</button>
                            <span className="px-4 border-start border-end fw-bold" style={{ minWidth: '60px', textAlign: 'center' }}>
                                {quantity}
                            </span>
                            <button onClick={increaseQty} className="btn px-3 fw-bold" disabled={quantity >= maxSelectableNow}>+</button>
                        </div>
                    </div>

                    {/* PREZZO E AGGIUNGI */}
                    <div className="d-flex justify-content-between align-items-end">
                        {product.initial_price !== product.actual_price ? (
                            <>
                                <div className="d-flex justify-content-start ">
                                    <h2 className="display-6 fw-light text-decoration-line-through text-muted">
                                        €{product.initial_price}
                                    </h2>
                                    <h2 className="display-6 fw-light px-3">
                                        €{(quantity * parseFloat(product.actual_price)).toFixed(2)}
                                    </h2>
                                </div>
                            </>

                        ) : (
                            <>
                                <h2 className="display-6 fw-light">
                                    €{(quantity * parseFloat(product.actual_price)).toFixed(2)}
                                </h2>
                            </>
                        )}


                        <div className="position-relative">
                            <button
                                className="btn btn-dark btn-lg px-5 py-3"
                                onClick={handleAdd}
                                disabled={maxSelectableNow <= 0 || quantity === 0}
                            >
                                {maxSelectableNow <= 0 ? "Non disponibile" : "Aggiungi"}
                            </button>
                        </div>
                    </div>

                    {showSuccess && (
                        <div className="alert alert-success mt-4 text-center py-2 animate__animated animate__fadeIn">
                            <i className="bi bi-check2-circle me-2"></i> Prodotto aggiunto!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}