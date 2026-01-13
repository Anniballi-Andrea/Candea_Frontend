import { Link } from "react-router-dom";

export default function SingleCardProduct({ product }) {

    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const categoryList = product.categories
        .map(cat => capitalize(cat.name))
        .join(', ');

    return (
        <div className="product-col">
            <Link
                to={`/products/${product.slug}`}
                className="product-link"
            >
                <div className="product-card">

                    <div className="product-image-wrapper">
                        <img
                            src={`http://localhost:3000/${product.img}`}
                            alt={product.name}
                            className="product-image"
                        />
                    </div>

                    <div className="product-body">
                        <div>
                            <h5 className="product-title">{product.name}</h5>
                            <p className="product-categories">{categoryList}</p>
                        </div>

                        <div className="product-price">
                            €{product.initial_price}
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    );
}
