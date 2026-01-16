import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <div className="container my-5 py-5 alert alert-success shadow-sm">
            <h1 className="mb-5 fw-bold text-center">Errore: 404</h1>
            <hr />
            <p className="text-center pt-5">Pagina non trovata, clicca per tornare alla Home</p>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-success" to="/">Home Page</Link>
            </div>

        </div>
    )
}