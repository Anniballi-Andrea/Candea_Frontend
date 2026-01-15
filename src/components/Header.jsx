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
        axios.get("http://localhost:3000/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Errore categorie:", err));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container px-3"> {/* px-3 evita che il contenuto tocchi i bordi */}

                {/* LOGO */}
                <Link className="navbar-brand me-2" to="/">
                    <img src="/logo_scrittura.png" alt="Logo" height="40" />
                </Link>

                {/* SEARCH BAR - Avvolta in un div flessibile */}
                <div className="search-container-fluid flex-grow-1 mx-2">
                    <Search />
                </div>

                {/* BOTTONE HAMBURGER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                    style={{ padding: '4px 6px' }}
                >
                    <span className="navbar-toggler-icon" style={{ width: '1.2em', height: '1.2em' }}></span>
                </button>

                {/* MENU COLLAPSE */}
                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item"><Link className="nav-link" to="/products_view">Prodotti</Link></li>
                        <li className="nav-item">
                            <select
                                className="nav-select mx-lg-2 my-2 my-lg-0"
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
                        <li className="nav-item"><Link className="nav-link" to="/">Chi siamo</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/">FAQ</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link header-cart-link" to="/cart">
                                <i className="bi bi-bag"></i>
                                {uniqueItemsCount > 0 && <span className="badge rounded-pill">{uniqueItemsCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}