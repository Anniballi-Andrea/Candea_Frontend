import SingleCardProduct from './SingleCardProduct'
export default function ProductList() {
    return (
        <>
            <h2>
                Candele  più richieste
            </h2>
            <section className="my-4 py-3">
                <div className="container">
                    <div className="row row-cols1 row-cols-sm2 row-cols-lg-3 g-4">
                        <SingleCardProduct />
                    </div>
                </div>
            </section>

            <h2>
                Candele ultimi arrivi
            </h2>
            <section className="my-4 py-3">
                <div className="container">
                    <div className="row row-cols1 row-cols-sm2 row-cols-lg-3 g-4">
                        <SingleCardProduct />
                    </div>
                </div>
            </section>
        </>
    )
}