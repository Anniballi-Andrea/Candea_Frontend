import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import SingleCardProduct from "../components/SingleCardProduct";

export default function Products() {
    const { products } = useContext(ProductsContext);
    return (
        <div className="container p-5 text-center">
            <h1>Lista prodotti</h1>

            <div className="my-3 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                {products && products.map((prod, i) => (
                    <SingleCardProduct key={i} product={prod} />
                ))}

            </div>
        </div>
    )
}