import Bunner from "../components/Bunner";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/products?category")
            .then(response => { setProducts(response.data); })
            .catch(error => { console.error("Errore nel recupero dei prodotti:", error) })
        axios.get("http://localhost:3000/api/products/bySold")
            .then(response => { setBestSellers(response.data); })
            .catch(error => { console.error("Errore nel recupero dei prodotti:", error) })

    }, []);

    return (
        <>
            <Bunner />
            <ProductList products={products} bestSellers={bestSellers} />
        </>
    )
}