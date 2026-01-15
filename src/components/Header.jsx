import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search"

export default function Header() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Errore categorie:", err));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container">
                {/* LOGO */}
                <Link className="navbar-brand" to="/">
                    <img src="/logo_scrittura.png" alt="Logo" height="45" />
                </Link>

                {/* SEARCH BAR (Sempre visibile o integrata) */}
                <Search />

                {/* HAMBURGER BUTTON */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* NAV LINKS */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products_view">Prodotti</Link>
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
                                <option value="" disabled>Categorie</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">chi siamo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">FAQ</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link header-cart-link" to="/cart">
                                <i className="bi bi-bag"></i>
                                <span className="badge rounded-pill">0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}