import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between gap-4">

                    <div>
                        <h2 className="fw-bold">Candea</h2>
                    </div>

                    <ul className="nav justify-content-center gap-3">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-0 text-light" to="/">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-0 text-light" to="/">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-0 text-light" to="/">
                                Contacts
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex gap-3">
                        <a href="#" className="text-light fs-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-light fs-4">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-light fs-4">
                            <i className="bi bi-twitter-x"></i>
                        </a>
                    </div>

                </div>

                <div className="text-center text-light mt-4">
                    © {new Date().getFullYear()} Candea. All rights reserved.
                </div>
            </div>
        </footer>
    )
}