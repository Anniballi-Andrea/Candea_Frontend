import { Link } from "react-router-dom";
import products from "../assets/candele.js";

export default function Header() {
    const categories = products.map(prod => prod.category).filter((cat, index, self) => self.indexOf(cat) === index);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">

                <Link className="navbar-brand fw-bold fs-3" to="/" style={{ letterSpacing: '1px' }}>
                    <img className="img_logo" src="/logo_scrittura.png" alt="" />
                </Link>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <form className="d-flex mx-auto my-3 my-lg-0" style={{ maxWidth: "400px", width: "100%" }}>
                        <div className="input-group">
                            <input
                                className="form-control border-end-0"
                                type="search"
                                placeholder="Cerca candele..."
                            />
                            <button className="btn btn-outline-secondary border-start-0" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
                        <li className="nav-item px-2">
                            <Link className="nav-link text-uppercase small fw-semibold" to="/">Products</Link>
                        </li>
                        <li className="nav-item px-2">
                            <select
                                className="form-select form-select-sm text-uppercase small fw-semibold"
                                defaultValue=""
                                style={{ minWidth: "120px" }}
                                onChange={(e) => {
                                    // Redirect alla pagina /category
                                    window.location.href = "/products/category"
                                }}>
                                <option value="" disabled>
                                    Category
                                </option>

                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-uppercase small fw-semibold" to="/">About Us</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-uppercase small fw-semibold" to="/">FAQ</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-uppercase small fw-semibold" to="/">Contacts</Link>
                        </li>

                        <li className="nav-item ms-lg-3">
                            <Link className="nav-link position-relative d-inline-block" to="/cart">
                                <i className="bi bi-bag fs-4 text-dark"></i>
                                {/* Badge numero articoli */}
                                <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-dark" style={{ fontSize: '0.6rem' }}>
                                    0
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}