import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState("");

    const { cart } = useCart();

    // Mostra il numero di prodotti diversi (lunghezza array)
    // Es: 3 candele vaniglia = segna 1
    const uniqueItemsCount = cart.length;

    useEffect(() => {
        axios.get("http://localhost:3000/api/categories")
            .then(res => setCategories(res.data))
            .catch(err => console.error("Errore categorie:", err));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/logo_scrittura.png" alt="Logo" height="45" />
                </Link>

                <form className="d-flex mx-auto header-search-form">
                    <input className="form-control" type="search" placeholder="Cerca candele..." />
                    <button className="btn btn-search" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>

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
                            <Link className="nav-link" to="/">Chi siamo</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">FAQ</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link header-cart-link" to="/cart" style={{ position: 'relative' }}>
                                <i className="bi bi-bag"></i>
                                {uniqueItemsCount > 0 && (
                                    <span className="badge rounded-pill bg-danger"
                                        style={{
                                            position: 'absolute',
                                            top: '-5px',
                                            right: '-5px',
                                            fontSize: '0.7rem'
                                        }}>
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