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
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <Link to="/" className="header-logo">
                    <img src="/logo_scrittura.png" alt="Logo" />
                </Link>

                {/* SEARCH */}
                <form className="header-search">
                    <input type="search" placeholder="Cerca candele..." />
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>

                {/* NAV */}
                <nav className="header-nav">
                    <Link to="/">Products</Link>

                    <select
                        value={selected}
                        onChange={(e) => {
                            navigate(`/products?category=${e.target.value}`);
                            setSelected("");
                        }}
                    >
                        <option value="" disabled>Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <Link to="/">About</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Contacts</Link>

                    {/* CART */}
                    <Link to="/cart" className="header-cart">
                        <i className="bi bi-bag cart-icon"></i>
                        <span className="cart-badge">0</span>
                    </Link>
                </nav>

            </div>
        </header>
    );
}
