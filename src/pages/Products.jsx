import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductContext";
import SingleCardProduct from "../components/SingleCardProduct";

export default function Products() {

    const { products } = useContext(ProductsContext)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")?.toLocaleLowerCase() || ""
    console.log("URL SEARCH:", search)

    const filteredProducts = products.filter(prod =>
        prod.name.toLowerCase().includes(search) ||
        (prod.description || "").toLowerCase().includes(search) ||
        (prod.scent || "").toLowerCase().includes(search) ||
        prod.categories?.some(cat =>
            cat.name.toLowerCase().includes(search)
        )
    )

    return (
        <div className="container p-5 text-center">
            <h1>Lista prodotti</h1>

            <div className="my-3 row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                {filteredProducts.map((prod, i) => (
                    <SingleCardProduct key={i} product={prod} />
                ))}

            </div>
        </div>
    )
}