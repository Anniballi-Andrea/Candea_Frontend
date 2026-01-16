
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


export default function SummaryOrder() {
    const { orderData } = useCart();
    const { total, cart, city, email, first_name, last_name, phone_number, province, street, street_number, zip_code } = orderData

    const [spedition, setSpedition] = useState(false)

    function SetSpeditionCost(cart) {
        let totalPrice = 0
        cart.forEach(el => {
            totalPrice += Number(el.actual_price) * el.quantity
            console.log(totalPrice)
        })
        if (totalPrice <= 90) {
            setSpedition(true)
        }
    }

    useEffect(() => { SetSpeditionCost(cart), console.log(spedition) }, [])

    return (

        <div className="card border-0 bg-light p-4 shadow-sm">
            <h4 className="fw-bold mb-4 text-success">Ordine avvenuto con successo</h4>

            {/* Lista prodotti stile scontrino */}
            <div className="cart-summary-list mb-3">
                {cart.map((item) => (
                    <>
                        <div
                            key={item.id}
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
                    </>
                ))}
                <div className="d-flex justify-content-end">
                    <div>Totale:{total}</div>
                </div>


            </div>
            <div>
                <h2>Acquisto effettutato da:</h2>
                <p>Nome: {first_name}</p>
                <p>Cognome: {last_name}</p>
                <p>email: {email}</p>
                <p>numero di telefono: {phone_number}</p>
                <p>Città: {city}</p>
                <p>Povincia: {province}</p>
                <p>Via: {street} {street_number}</p>
                <p>CAP: {zip_code}</p>
            </div>
        </div>
    )
}