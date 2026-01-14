import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error("Errore prodotti:", err));

        axios.get("http://localhost:3000/api/products/bySold")
            .then(res => setBestSellers(res.data))
            .catch(err => console.error("Errore best sellers:", err));
    }, []);

    return (
        <ProductsContext.Provider value={{ products, bestSellers }}>
            {children}
        </ProductsContext.Provider>
    );
}