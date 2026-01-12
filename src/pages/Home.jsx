import Bunner from "../components/Bunner";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => { setProducts(response.data); })
            .catch(error => { console.error("Errore nel recupero dei prodotti:", error) })
    }, []);

    return (
        <>
            <Bunner />
            <ProductList />
        </>
    )
}