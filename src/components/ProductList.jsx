import SingleCardProduct from './SingleCardProduct';

export default function ProductList() {
    // Esempio di dati (Mock) che poi sostituirai con quelli del Database
    const candelePopolari = [
        { id: 1, title: "Candela Lavanda", category: "Relassante", price: "15.00", imageUrl: "https://via.placeholder.com/300x400" },
        { id: 2, title: "Candela Agrumi", category: "Energizzante", price: "18.00", imageUrl: "https://via.placeholder.com/300x400" }
    ];

    return (
        <div className="container my-5">
            <h2>Candele più richieste</h2>
            <section className="my-4 py-3">
                {/* Corretto row-cols-1 con il trattino */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {candelePopolari.map(prod => (
                        <SingleCardProduct key={prod.id} product={prod} />
                    ))}
                </div>
            </section>

            <h2>Candele ultimi arrivi</h2>
            <section className="my-4 py-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    {/* Qui potresti mappare un altro array dal DB */}
                    <SingleCardProduct product={candelePopolari[0]} />
                </div>
            </section>
        </div>
    );
}