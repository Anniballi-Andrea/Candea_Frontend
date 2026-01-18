import SingleCardProduct from "./SingleCardProduct";

export default function ProductShowcase({ title, products }) {
	return (
		<div className="container my-5">
			<h2 className="fw-bold mb-4">{title}</h2>

			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
				{products.length > 0 ? (
					products.map((prod) => (
						<SingleCardProduct key={prod.id} product={prod} />
					))
				) : (
					<div className="col-12">
						<p>Nessun prodotto trovato.</p>
					</div>
				)}
			</div>
		</div>
	);
}
