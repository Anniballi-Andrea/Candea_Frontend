import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductListCategory from "../components/ProductListCategory";

export default function CategoryProduct() {

    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();


    useEffect(() => {
        const category = searchParams.get("category");
        if (category) {
            axios.get(`http://localhost:3000/api/products?category=${category}`)
                .then(response => { setProducts(response.data); })
                .catch(error => { console.error("Errore nel recupero dei prodotti:", error) })
        }
    }, [searchParams]);

    return (
        <div className="container p-5 text-center">
            <h1>Category Product Page</h1>
            <p>Qui verranno mostrati i prodotti filtrati per categoria.</p>
            <ProductListCategory products={products} />
        </div>
    );
}