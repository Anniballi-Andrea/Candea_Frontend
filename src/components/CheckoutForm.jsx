import { useState } from "react";

export default function CheckoutForm({ cart }) {
    const [message, setMessage] = useState(false)


    const initialCheckoutForm = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        city: "",
        province: "",
        street: "",
        street_number: "",
        zip_code: "",
        discount_code: ""
    }

    const [checkoutForm, setCheckoutForm] = useState(initialCheckoutForm)

    function handleSubmit(e) {
        e.preventDefault()
        const products = cart.map(el => {
            return ({
                id: el.id,
                quantity: el.quantity
            })
        })

        const data = {
            products,
            ...checkoutForm
        }
        console.log(data)

        axios.post(`http://localhost:3000/api/orders`, data)
            .then((res) => {
                setMessage("Grazie per l'aquisto")
                setCheckoutForm(initialCheckoutForm)

            })

            .catch((err) => {
                setMessage("ops, c'è stato un errore")
                console.log(err)
            })

    }

    return (
        <div className="container mt-5 mb-5">
            <div className="checkout-card">
                <h2 className="checkout-title">Completamento Ordine</h2>

                <div className="container mt-5">
                    {message && <p>{message}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="firstName" >nome:</label>
                                </div>

                                <input type="text"
                                    id="firstName"
                                    value={checkoutForm.first_name}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, first_name: e.target.value })}
                                    placeholder="Nome" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="secondName">Cognome:</label>
                                </div>

                                <input type="text"
                                    id="secondName"
                                    value={checkoutForm.last_name}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, last_name: e.target.value })}
                                    placeholder="Cognome" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="email">e-mail:</label>
                                </div>

                                <input type="email"
                                    id="email"
                                    value={checkoutForm.email}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                                    placeholder="email" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="phone">Numero di telefono:</label>
                                </div>

                                <input type="text"
                                    id="phone"
                                    value={checkoutForm.phone_number}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone_number: e.target.value })}
                                    placeholder="Numero di telefono" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="city">Città:</label>
                                </div>

                                <input type="text"
                                    id="city"
                                    value={checkoutForm.city}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                                    placeholder="Città" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="province">provincia:</label>
                                </div>

                                <input type="text"
                                    id="province"
                                    value={checkoutForm.province}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, province: e.target.value })}
                                    placeholder="Provincia" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="street">via:</label>
                                </div>

                                <input type="text"
                                    id="street"
                                    value={checkoutForm.street}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, street: e.target.value })}
                                    placeholder="Via" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="streetNumber">Numero civico:</label>
                                </div>

                                <input type="Number"
                                    id="streetNumber"
                                    value={checkoutForm.street_number}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, street_number: e.target.value })}
                                    placeholder="Numero civico" />
                            </div>
                            <div className="col mt-3">
                                <div className="mb-2">
                                    <label htmlFor="zipCode">CAP:</label>
                                </div>

                                <input type="text"
                                    id="zipCode"
                                    value={checkoutForm.zip_code}
                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, zip_code: e.target.value })}
                                    placeholder="CAP" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <div className="col mt-3">
                                    <div>
                                        <label htmlFor="discountCode">Hai un codice sconto?</label>
                                    </div>
                                    <input type="text"
                                        id="discountCode"
                                        value={checkoutForm.discount_code}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, discount_code: e.target.value })}
                                        placeholder="Codice sconto" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div>
                                <button type="submit" className="btn btn-primary">
                                    Effettua l'ordine
                                </button>
                            </div>
                        </div>
                    </form >

                </div >
            </div>
        </div>
    )
}