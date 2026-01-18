import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultLayout() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			<main className="flex-grow-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
