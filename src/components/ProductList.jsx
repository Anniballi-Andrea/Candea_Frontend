import SingleCardProduct from './SingleCardProduct';

export default function ProductList({ products }) {
    // I dati devono essere qui!
    const candelePopolari = [
        {
            id: 1,
            title: "Candela Lavanda",
            category: "Rilassante",
            price: "15.00",
            imageUrl: "https://via.placeholder.com/300x400"
        },
        {
            id: 2,
            title: "Candela Agrumi",
            category: "Energizzante",
            price: "18.00",
            imageUrl: "https://via.placeholder.com/300x400"
        }
    ];
    const latestProducts = products && products.length > 0
        ? [...products]
            .filter(p => p.created_at) // sicurezza
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 4)
        : [];



    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-4">Ultimi arrivi</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    {latestProducts.length > 0 ? (
                        latestProducts.map(prod => (
                            <SingleCardProduct key={prod.id} product={prod} />
                        ))
                    ) : (
                        <p>Nessun prodotto trovato.</p>
                    )}
                </div>
            </div>
            <div className="container my-5">
                <h2 className="fw-bold mb-4">Lista candele</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    {/* Controlliamo che l'array esista prima di mapparlo */}
                    {products && products.length > 0 ? (
                        products.map(prod => (
                            <SingleCardProduct key={prod.id} product={prod} />
                        ))
                    ) : (
                        <p>Nessun prodotto trovato.</p>
                    )}
                </div>
            </div>
        </>

    );
}