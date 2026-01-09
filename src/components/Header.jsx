import { Link } from "react-router-dom";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">

                {/* Logo / Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    Candea
                </Link>

                {/* Toggle mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="d-flex my-3 ml-5" style={{ maxWidth: "400px", width: "100%" }}>
                    <input
                        className="form-control mx-2"
                        type="search"
                        placeholder="Cerca candele..."
                    />
                    <button className="btn btn-dark" type="submit">
                        Cerca
                    </button>
                </form>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                FAQ
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}