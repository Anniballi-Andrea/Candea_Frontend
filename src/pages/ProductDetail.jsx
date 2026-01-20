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
        axios
            .get(`http://localhost:3000/api/products/${slug}`)
            .then((response) => {
                const data = response.data;
                setProduct(data);

                // Calcolo disponibilità iniziale considerando il carrello
                const inCart = cart.find((item) => item.id === data.id);
                const qtyInCart = inCart ? inCart.quantity : 0;
                const realAvailable = data.available_quantity - qtyInCart;

                setQuantity(realAvailable <= 0 ? 0 : 1);
            })
            .catch((err) => console.error("Errore:", err));
    }, [slug, cart]);

    // --- LOGICA RIGIDA DI CALCOLO ---
    const alreadyInCart = product
        ? cart.find((item) => item.id === product.id)?.quantity || 0
        : 0;
    const maxSelectableNow = product
        ? product.available_quantity - alreadyInCart
        : 0;

    const increaseQty = () => {
        if (quantity < maxSelectableNow) setQuantity((prev) => prev + 1);
    };

    const decreaseQty = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
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

    function discountPerc(initial_price, actual_price) {
        if (initial_price !== actual_price) {
            const perc = ((initial_price - actual_price) / initial_price) * 100
            return `${Math.floor(perc)}%`
        }
        return
    }

    if (!product)
        return <div className="container p-5 text-center">Caricamento...</div>;

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


                    <p className="my-4 text-secondary">{product.description}</p>

                    {/* Dati recuperati: Sentori, Durata, Colore */}
                    <div className="product-info-list mb-4">
                        <p className="mb-1 text-secondary">
                            <span className="fw-bold">Sentori di:</span> {product.scent}
                        </p>
                        <p className="mb-1 text-secondary">
                            <span className="fw-bold">Durata:</span> {product.burn_time}
                        </p>
                        <p className="mb-1 text-secondary">
                            <span className="fw-bold">Colore:</span> {product.color}
                        </p>
                        <p className="mb-1 text-secondary">
                            <span className="fw-bold">Dimensioni: </span>{product.dimensions}</p>
                    </div>

                    <hr />

                    {/* DISPONIBILITÀ DINAMICA */}
                    <div className="mb-4">
                        {maxSelectableNow > 0 ? (
                            <span
                                className={`fw-bold text-uppercase small ${product.available_quantity === 0 ? "text-danger" : "text-muted"}`}
                            >
                                Disponibilità magazzino: {product.available_quantity} PZ
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
                        <div className="bottoni_increment_decrement d-flex border align-items-center bg-white shadow-sm">
                            <button
                                type="button"
                                onClick={decreaseQty}
                                className="btn px-8 fw-bold"
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="qty-display fw-bold ">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={increaseQty}
                                className="btn px-8 fw-bold"
                                disabled={quantity >= maxSelectableNow}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* PREZZO E AGGIUNGI */}
                    <div className="d-flex">
                        <span className="badge text-bg-success">{discountPerc(product.initial_price, product.actual_price)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                        <div>
                            {product.initial_price !== product.actual_price ? (
                                <div className="d-flex justify-content-start ">
                                    <h2 className="display-6 fw-light">
                                        €{(quantity * parseFloat(product.actual_price)).toFixed(2)}
                                    </h2>
                                    <h2 className="display-6 fw-light text-decoration-line-through text-muted px-3">
                                        €{(quantity * parseFloat(product.initial_price)).toFixed(2)}
                                    </h2>
                                </div>
                            ) : (
                                <h2 className="display-6 fw-light">
                                    €{(quantity * parseFloat(product.actual_price)).toFixed(2)}
                                </h2>
                            )}
                        </div>

                        <div className="position-relative">
                            <button
                                type="button"
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
