import SingleCardProduct from './SingleCardProduct';

export default function ProductList() {
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

    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-4">Candele più richieste</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {/* Controlliamo che l'array esista prima di mapparlo */}
                    {candelePopolari && candelePopolari.length > 0 ? (
                        candelePopolari.map(prod => (
                            <SingleCardProduct key={prod.id} product={prod} />
                        ))
                    ) : (
                        <p>Nessun prodotto trovato.</p>
                    )}
                </div>
            </div>

            <div className="container my-5">
                <h2 className="fw-bold mb-4">Candele in sale</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {/* Controlliamo che l'array esista prima di mapparlo */}
                    {candelePopolari && candelePopolari.length > 0 ? (
                        candelePopolari.map(prod => (
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