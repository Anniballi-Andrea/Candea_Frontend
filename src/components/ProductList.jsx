import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Simuliamo il database (questo array dovrebbe essere lo stesso che usi in ProductList)
const candeleDatabase = [
    { id: 1, title: "Candela Lavanda", category: "Rilassante", price: "15.00", brand: "Candle Shop", description: "Profumo intenso di lavanda provenzale.", imageUrl: "https://via.placeholder.com/600" },
    { id: 2, title: "Candela Agrumi", category: "Energizzante", price: "18.00", brand: "Candle Shop", description: "Mix di arancia, limone e bergamotto.", imageUrl: "https://via.placeholder.com/600" }
];

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Cerchiamo nel nostro "database" l'oggetto che ha lo stesso ID dell'URL
        // Usiamo Number(id) perché useParams restituisce sempre una stringa
        const productFound = candeleDatabase.find(p => p.id === Number(id));

        if (productFound) {
            // Se lo troviamo, aggiungiamo le immagini per la galleria
            setProduct({
                ...productFound,
                images: [productFound.imageUrl, "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
            });
        }
    }, [id]);

    if (!product) return <div className="container p-5 text-center">Prodotto non trovato...</div>;

    return (
        <div className="container my-5 py-5">
            <div className="row g-5">
                {/* GALLERIA */}
                <div className="col-md-6">
                    <div className="ratio ratio-1x1 bg-white mb-3 border border-light shadow-sm">
                        <img src={product.images[0]} alt={product.title} className="object-fit-contain p-4" />
                    </div>
                </div>

                {/* INFO: Qui ora apparirà il titolo corretto (es. "Candela Lavanda") */}
                <div className="col-md-6">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <p className="text-muted fs-5">{product.brand}</p>
                    <p className="my-4 text-secondary lh-lg">{product.description}</p>

                    {/* ... resto dei tuoi bottoni ... */}
                    <h2 className="display-6 fw-light text-secondary mt-5">€{product.price}</h2>
                </div>
            </div>
        </div>
    );
}