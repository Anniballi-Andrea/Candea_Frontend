import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import { WishlistProvider } from "./context/WishlistContext";

import DefaultLayout from "./layout/DefaultLayout";

import Cart from "./pages/Cart";
import CategoryProduct from "./pages/CategoryProduct";
import ChiSiamo from "./pages/ChiSiamo";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import SummaryOrder from "./pages/SummaryOrder";
import Wish from "./pages/Wish";

function App() {
	return (
		<SearchProvider>
			<WishlistProvider>
				<CartProvider>
					<BrowserRouter>
						<Routes>
							<Route element={<DefaultLayout />}>
								<Route path="/" element={<Home />} />
								{/* Definiamo la rotta con la 's' per i prodotti */}
								<Route path="/products_view" element={<Products />} />
								<Route path="/products/:slug" element={<ProductDetail />} />
								<Route path="/products" element={<CategoryProduct />} />
								<Route
									path="/products/category"
									element={<CategoryProduct />}
								/>
								<Route path="/cart" element={<Cart />} />
								<Route path="/wishlist" element={<Wish />} />
								<Route path="/summary_order" element={<SummaryOrder />} />
								<Route path="*" element={<NotFound />} />
								<Route path="/ChiSiamo" element={<ChiSiamo />} />
								<Route path="/FAQ" element={<Faq />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</CartProvider>
			</WishlistProvider>
		</SearchProvider>
	);
}

export default App;
