import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    // AGGIUNTA: Stato per la quantità e il prezzo
    const [quantity, setQuantity] = useState(1);
    const [displayPrice, setDisplayPrice] = useState(0);

    useEffect(() => {
        const fakeFetch = {
            id: id,
            title: "Candela Artigianale " + id,
            brand: "Candle Shop",
            price: "15.00", // Prezzo base
            description: "Questa candela è stata creata con cera di soia naturale e oli essenziali puri, importata direttamente dal nostro database.",
            images: [
                "https://via.placeholder.com/600",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        };
        setProduct(fakeFetch);
        setDisplayPrice(parseFloat(fakeFetch.price)); // Inizializza il prezzo
    }, [id]);

    // AGGIUNTA: Funzioni per incrementare e decrementare
    const increaseQty = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        setDisplayPrice(newQty * parseFloat(product.price));
    };

    const decreaseQty = () => {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            setDisplayPrice(newQty * parseFloat(product.price));
        }
    };

    if (!product) return <div className="container p-5 text-center">Caricamento...</div>;

    return (
        <div className="container my-5 py-5">
            <div className="row g-5">
                <div className="col-md-6">
                    <div className="ratio ratio-1x1 bg-white mb-3 border border-light shadow-sm">
                        <img src={product.images[0]} alt={product.title} className="object-fit-contain p-4" />
                    </div>
                    <div className="d-flex gap-2 overflow-auto pb-2">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} width="80" height="80" className="img-thumbnail cursor-pointer" alt="thumb" />
                        ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <p className="text-muted fs-5">{product.brand}</p>
                    <p className="my-4 text-secondary lh-lg">{product.description}</p>

                    <div className="d-flex gap-2 my-4">
                        <button className="btn btn-dark rounded-0 px-4 py-2">Taglia S</button>
                        <button className="btn btn-dark rounded-0 px-4 py-2">Taglia M</button>
                        <button className="btn btn-dark rounded-0 px-4 py-2">Taglia L</button>
                    </div>

                    <div className="d-flex align-items-center gap-4 my-5">
                        <span className="fw-bold text-uppercase small">Quantità</span>
                        <div className="d-flex border align-items-center">
                            {/* BOTTONE MENO collegato alla funzione */}
                            <button
                                onClick={decreaseQty}
                                className="btn btn-link text-dark text-decoration-none px-3 fw-bold"
                            > - </button>

                            {/* NUMERO QUANTITÀ dinamico */}
                            <span className="px-3 py-2 border-start border-end">
                                {quantity}
                            </span>

                            {/* BOTTONE PIÙ collegato alla funzione */}
                            <button
                                onClick={increaseQty}
                                className="btn btn-link text-dark text-decoration-none px-3 fw-bold"
                            > + </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-end mt-5">
                        {/* PREZZO AGGIORNATO (con toFixed(2) per i decimali) */}
                        <h2 className="display-6 fw-light text-secondary mb-0">€{displayPrice.toFixed(2)}</h2>
                        <button className="btn btn-dark btn-lg rounded-0 px-5 py-3 text-uppercase fw-bold">
                            Aggiungi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}