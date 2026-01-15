import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Search from "./Search";

export default function Header() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");
    const { cart } = useCart();
    const uniqueItemsCount = cart.length;

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Errore categorie:", err));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container">

                {/* LOGO */}
                <Link className="navbar-brand" to="/">
                    <img src="/logo_scrittura.png" alt="Logo" />
                </Link>

                {/* HAMBURGER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                    aria-controls="navbarMain"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* COLLAPSE */}
                <div className="collapse navbar-collapse" id="navbarMain">

                    {/* SEARCH */}
                    <div className="header-search-wrapper mx-lg-4 my-3 my-lg-0">
                        <Search />
                    </div>

                    {/* NAV */}
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                        <li className="nav-item">
                            <Link className="nav-link" to="/products_view">
                                Prodotti
                            </Link>
                        </li>

                        <li className="nav-item">
                            <select
                                className="nav-select"
                                value={selected}
                                onChange={(e) => {
                                    navigate(`/products?category=${e.target.value}`);
                                    setSelected("");
                                }}
                            >
                                <option value="" disabled>
                                    Categorie
                                </option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Chi siamo
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                FAQ
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link header-cart-link" to="/wish_list">
                                <i className="bi bi-suit-heart"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link header-cart-link" to="/cart">
                                <i className="bi bi-bag"></i>
                                {uniqueItemsCount > 0 && (
                                    <span className="badge rounded-pill">
                                        {uniqueItemsCount}
                                    </span>
                                )}
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
