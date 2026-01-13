import { Link } from "react-router-dom";

export default function SingleCardProduct({ product }) {

    function capitalize(str) {
        if (!str) {
            return "";
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const categoryList = product.categories.map(cat => capitalize(cat.name)).join(', ')

    return (
        <div className="col">
            {/* Il Link punta a /products/ID come definito in App.jsx */}
            <Link to={`/products/${product.slug}`} className="text-decoration-none h-100 d-block">
                <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden" style={{ backgroundColor: '#e0e0e0' }}>

                    <div className="p-3">
                        <img
                            src={`http://localhost:3000/${product.img}`}
                            className="card-img-top object-fit-cover w-80"
                            alt={product.name}
                            style={{ height: '250px', backgroundColor: '#fff' }}
                        />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between p-4">
                        <div>
                            <h5 className="card-title fw-bold mb-1 text-dark">{product.name}</h5>
                            <p className="card-text text-muted small">{categoryList}</p>
                        </div>

                        <div className="mt-4 text-end">
                            <span className="h4 fw-light text-secondary">
                                €{product.initial_price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}