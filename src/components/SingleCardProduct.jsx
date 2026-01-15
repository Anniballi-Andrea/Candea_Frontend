import { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function SingleCardProduct({ product }) {

    const [like, setLike] = useState(false)

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
                        <i
                            className={`bi ${like ? "bi-suit-heart-fill" : "bi-suit-heart"}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setLike(prev => !prev)
                            }}
                        ></i>
                        <img
                            src={`http://localhost:3000/${product.img}`}
                            alt={product.name}
                            className="product-image"
                        />
                    </div>

                    <div className="product-body">
                        <div>
                            <h5 className="product-title">{capitalize(product.name)}</h5>
                            <p className="product-categories">{categoryList}</p>
                        </div>

                        <div className="product-price">
                            €{product.initial_price}
                        </div>
                    </div>

                </div>
            </Link >
        </div >
    );
}
