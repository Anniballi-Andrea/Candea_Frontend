import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";

export default function Search() {
	const { search, setSearch } = useSearch();
	// const [query, setQuery] = useState("")
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("QUERY:", search);
		if (!search.trim()) return;

		navigate(`/products_view?q=${encodeURIComponent(search)}`);
		// setSearch("");
	};

	return (
		<form className="d-flex mx-auto header-search-form" onSubmit={handleSubmit}>
			<input
				className="form-control"
				type="search"
				placeholder="Cerca candele..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className="btn btn-search" type="submit">
				<i className="bi bi-search"></i>
			</button>
		</form>
	);
}
