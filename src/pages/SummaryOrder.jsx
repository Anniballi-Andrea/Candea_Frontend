import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function SummaryOrder() {
    const { orderData } = useCart();
    const {
        total,
        cart,
        city,
        email,
        first_name,
        last_name,
        phone_number,
        province,
        street,
        street_number,
        zip_code,
    } = orderData;


    // const [shipping, setShipping] = useState(false);

    // function setShippingCost(cart) {
    // 	let totalPrice = 0;
    // 	cart.forEach((el) => {
    // 		totalPrice += Number(el.actual_price) * el.quantity;
    // 		console.log(totalPrice);
    // 	});
    // 	if (totalPrice <= 90) {
    // 		setShipping(true);
    // 	}
    // }

    // useEffect(() => {
    // 	setShippingCost(cart);
    // }, []);


    return (
        <div className="summary-order-page d-flex align-items-center justify-content-center min-vh-100 mt-5">
            {orderData.total > 0 ? (
                <div className="summary-order-card">
                    <h4 className="fw-bold mb-4 text-success">
                        Ordine avvenuto con successo
                    </h4>

                    {/* Lista prodotti stile scontrino */}
                    <div className="cart-summary-list mb-3">
                        {cart?.map((item) => (
                            <div key={item.id}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div style={{ wordBreak: "break-word" }}>
                                        <span className="fw-bold">{item.name}</span>
                                        <span className="text-muted ms-2">x{item.quantity}</span>
                                    </div>
                                    <div>
                                        €{(Number(item.actual_price) * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}

                        {/* Spese di spedizione se < 90€ */}
                        {orderData.total < 90 && (
                            <>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div style={{ wordBreak: "break-word" }}>
                                        <span className="fw-bold">Spese di spedizione</span>
                                    </div>
                                    <div>€ 5,00</div>
                                </div>
                                <hr />
                            </>
                        )}

                        <div className="d-flex justify-content-end">
                            <div>
                                Totale: <strong>€{total?.toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>

                    {/* Dati utente */}
                    <div>
                        <h4>Acquisto effettuato da:</h4>
                        <p>Nome: <strong>{first_name}</strong></p>
                        <p>Cognome: <strong>{last_name}</strong></p>
                        <p>Email: <strong>{email}</strong></p>
                        <p>Numero di telefono: <strong>{phone_number}</strong></p>
                        <p>Città: <strong>{city}</strong></p>
                        <p>Provincia: <strong>{province}</strong></p>
                        <p>Via: <strong>{street} {street_number}</strong></p>
                        <p>CAP: <strong>{zip_code}</strong></p>
                    </div>
                    {/* Bottone Torna alla homepage */}
                    <div className="d-flex justify-content-center mt-2">
                        <Link to="/" className="btn-summary-home mt-3 text-decoration-none">
                            Torna alla homepage
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="summary-order-card text-center text-danger">
                    <h4 className="fw-bold mb-4">
                        Nessun ordine effettuato
                    </h4>
                </div>
            )}
        </div>
    );
}
