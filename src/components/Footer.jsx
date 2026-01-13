import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* LOGO */}
                <div className="footer-logo">
                    <Link to="/">
                        <img src="/logo_scrittura_white.png" alt="Candea logo" />
                    </Link>
                </div>

                {/* NAV */}
                <ul className="footer-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Contacts</Link></li>
                </ul>

                {/* SOCIAL */}
                <div className="footer-social">
                    <a href="#" aria-label="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="Twitter">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} Candea. All rights reserved.
            </div>
        </footer>
    );
}
