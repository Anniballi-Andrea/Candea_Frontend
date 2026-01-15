import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Search() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("QUERY:", query)
        if (!query.trim()) return;

        navigate(`/products_view?search=${encodeURIComponent(query)}`)
        setQuery("")
    }

    return (
        <form className="d-flex mx-auto header-search-form" onSubmit={handleSubmit}>
            <input
                className="form-control"
                type="search"
                placeholder="Cerca candele..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className="btn btn-search" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    )
}