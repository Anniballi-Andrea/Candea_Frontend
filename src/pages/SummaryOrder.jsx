
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




    //console.log(orderData)
    return (
        <div className="container mt-5">
            {
                orderData.total > 0 ? <div className="card border-0 bg-light p-4 shadow-sm">
                    <h4 className="fw-bold mb-4 text-success">
                        Ordine avvenuto con successo
                    </h4>

                    {/* Lista prodotti stile scontrino */}
                    <div className="cart-summary-list mb-3">
                        {cart?.map((item) => (
                            <div key={item.id}>
                                <div

                                    className="d-flex justify-content-between align-items-center mb-2"
                                >
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
                        {
                            orderData.total < 90 &&
                            <>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div style={{ wordBreak: "break-word" }}>
                                        <span className="fw-bold">spese di spedizione</span>

                                    </div>
                                    <div>
                                        € 5,00
                                    </div>
                                </div>
                                <hr />
                            </>
                        }


                        <div className="d-flex justify-content-end">
                            <div>
                                Totale: <strong>€{total?.toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Acquisto effettutato da:</h4>
                        <p>
                            Nome: <strong>{first_name}</strong>
                        </p>
                        <p>
                            Cognome: <strong>{last_name}</strong>
                        </p>
                        <p>
                            email: <strong>{email}</strong>
                        </p>
                        <p>
                            numero di telefono: <strong>{phone_number}</strong>
                        </p>
                        <p>
                            Città: <strong>{city}</strong>
                        </p>
                        <p>
                            Povincia: <strong>{province}</strong>
                        </p>
                        <p>
                            Via:{" "}
                            <strong>
                                {street} {street_number}
                            </strong>
                        </p>
                        <p>
                            CAP: <strong>{zip_code}</strong>
                        </p>
                    </div>
                </div> :
                    <div className="card border-0 bg-light p-4 shadow-sm d-flex justify-content-center ">

                        <h4 className="fw-bold mb-4  text-danger text-center">
                            Nessun ordine effettuato
                        </h4>


                    </div>
            }

            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-dark px-4 mt-3 ml-auto">
                    Torna alla homepage
                </Link>
            </div>
        </div>
    );
}
