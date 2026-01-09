import { Link } from "react-router-dom";

export default function SingleCardProduct({ product }) {
    const {
        id = 1,
        title = "Titolo Prodotto",
        category = "Categoria",
        price = "00.00",
        imageUrl = "https://via.placeholder.com/300x400"
    } = product || {};

    return (
        <>
            <div className="col-md-4 col-sm-6 mb-4">
                <Link to={`/product/${id}`}>
                    <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden" style={{ backgroundColor: '#e0e0e0' }}>

                        <div className="p-3">
                            <img
                                src={imageUrl}
                                className="card-img-top object-fit-cover"
                                alt={title}
                                style={{ height: '250px', backgroundColor: '#fff' }}
                            />
                        </div>

                        <div className="card-body d-flex flex-column justify-content-between p-4">
                            <div>
                                <h5 className="card-title fw-bold mb-1 text-dark">{title}</h5>
                                <p className="card-text text-muted small uppercase">{category}</p>
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
        </>
    )
}