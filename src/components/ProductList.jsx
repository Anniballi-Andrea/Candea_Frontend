import SingleCardProduct from './SingleCardProduct';

export default function ProductList({ products }) {

    return (
        <>
            <div className="container my-5">
                <h2 className="fw-bold mb-4">Candele Più vendute</h2>

                {/* Contenitore carosello */}
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {products && products.length > 0 ? (
                            products.map(prod => (
                                <div className="carousel-item" key={prod.id}>
                                    <SingleCardProduct product={prod} />
                                </div>
                            ))
                        ) : (
                            <p>Nessun prodotto trovato.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2 className="fw-bold mb-4">Lista candele</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    {products.length > 0 ? (
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