import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
                <form className="d-flex mx-auto header-search-form">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Cerca candele..."
                    />
                    <button className="btn btn-search" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>

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
                            <Link className="nav-link" to="/">Products</Link>
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
                                <option value="" disabled>Categories</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">About</Link>
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