import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [displayPrice, setDisplayPrice] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/products/${slug}`)
            .then(response => {
                setProduct(response.data);
                setDisplayPrice(parseFloat(response.data.initial_price));
            })
            .catch(error => {
                console.error("Errore nel recupero del prodotto:", error);
            });
    }, [slug]);

    const increaseQty = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        setDisplayPrice(newQty * parseFloat(product.initial_price));
    };

    const decreaseQty = () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            setDisplayPrice(newQty * parseFloat(product.initial_price));
        }
    };

    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!product) {
        return (
            <div className="container p-5 text-center">
                Caricamento...
            </div>
        );
    }

    return (
        <div className="container my-5 py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <div className="ratio ratio-1x1 bg-white mb-3 border shadow-sm">
                        <img
                            src={`http://localhost:3000/${product.img}`}
                            alt={product.title}
                            className="object-fit-contain p-4"
                        />
                    </div>

                </div>

                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{capitalize(product.name)}</h1>
                    <p className="text-muted fs-5">{product.dimensions}</p>
                    <p className="my-4 text-secondary">{product.description}</p>
                    <p className="my-4 text-secondary">Sentori di {product.scent}</p>
                    <p className="my-4 text-secondary">Durata: {product.burn_time}</p>
                    <p className="my-4 text-secondary">Colore: {product.color}</p>
                    <hr />
                    <span className="fw-bold text-uppercase small">Disponibili {product.available_quantity}PZ</span>

                    <div className="d-flex align-items-center gap-4 my-5">
                        <span className="fw-bold text-uppercase small">Quantità</span>

                        <div className="d-flex border align-items-center">
                            <button onClick={decreaseQty} className="btn px-3">-</button>
                            <span className="px-3">{quantity}</span>
                            <button onClick={increaseQty} className="btn px-3">+</button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-end">
                        <h2 className="display-6 fw-light">
                            €{displayPrice.toFixed(2)}
                        </h2>

                        <button className="btn btn-dark btn-lg">
                            Aggiungi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}