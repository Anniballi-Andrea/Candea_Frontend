import SingleCardProduct from './SingleCardProduct';

export default function ProductListCategory({ products }) {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                {products && products.length > 0 ? (
                    products.map((prod) => (
                        <SingleCardProduct key={prod.id || prod._id} product={prod} />
                    ))
                ) : (
                    <div className="col-12">
                        <p>Nessun prodotto trovato per questa categoria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}