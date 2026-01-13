import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import CategoryProduct from "./pages/CategoryProduct";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* Definiamo la rotta con la 's' per i prodotti */}
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/products" element={<CategoryProduct />} />
          <Route path="/products/category" element={<CategoryProduct />} />
          <Route path="/cart" element={<h1>QUesto è il carrello in futuro</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;