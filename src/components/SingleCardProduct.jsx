import { Link } from "react-router-dom";

export default function SingleCardProduct({ product }) {
    // Valori di default se product è undefined
    const {
        id = 0,
        title = "Prodotto",
        category = "Categoria",
        price = "0.00",
        imageUrl = "https://via.placeholder.com/300x400"
    } = product || {};

    return (
        <div className="col">
            {/* Il Link punta a /products/ID come definito in App.jsx */}
            <Link to={`/products/${id}`} className="text-decoration-none h-100 d-block">
                <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden" style={{ backgroundColor: '#e0e0e0' }}>

                    <div className="p-3">
                        <img
                            src={imageUrl}
                            className="card-img-top object-fit-cover w-80"
                            alt={title}
                            style={{ height: '250px', backgroundColor: '#fff' }}
                        />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between p-4">
                        <div>
                            <h5 className="card-title fw-bold mb-1 text-dark">{title}</h5>
                            <p className="card-text text-muted small text-uppercase">{category}</p>
                        </div>

                        <div className="mt-4 text-end">
                            <span className="h4 fw-light text-secondary">
                                €{price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}