import axios from "axios"
import { useState } from "react"

export default function CheckoutForm() {



    const initialCheckoutForm = {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        city: "",
        province: "",
        street: "",
        streetNumber: "",
        zipCode: "",
        discountCode: ""
    }

    const [checkoutForm, SetCheckoutForm] = useState(initialCheckoutForm)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(checkoutForm)
    }


    return (

        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="firstName" >nome:</label>
                        </div>

                        <input type="text"
                            id="firstName"
                            value={checkoutForm.firstName}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, firstName: e.target.value })}
                            placeholder="Nome" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="secondName">Cognome:</label>
                        </div>

                        <input type="text"
                            id="secondName"
                            value={checkoutForm.secondName}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, secondName: e.target.value })}
                            placeholder="Cognome" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="email">e-mail:</label>
                        </div>

                        <input type="email"
                            id="email"
                            value={checkoutForm.email}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, email: e.target.value })}
                            placeholder="email" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="phone">Numero di telefono:</label>
                        </div>

                        <input type="text"
                            id="phone"
                            value={checkoutForm.phone}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                            placeholder="Numero di telefono" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="city">Città:</label>
                        </div>

                        <input type="text"
                            id="city"
                            value={checkoutForm.city}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, city: e.target.value })}
                            placeholder="Città" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="province">provincia:</label>
                        </div>

                        <input type="text"
                            id="province"
                            value={checkoutForm.province}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, province: e.target.value })}
                            placeholder="Provincia" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="street">via:</label>
                        </div>

                        <input type="text"
                            id="street"
                            value={checkoutForm.street}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, street: e.target.value })}
                            placeholder="Via" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="streetNumber">Numero civico:</label>
                        </div>

                        <input type="Number"
                            id="streetNumber"
                            value={checkoutForm.streetNumber}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, streetNumber: e.target.value })}
                            placeholder="Numero civico" />
                    </div>
                    <div className="col mt-3">
                        <div className="mb-2">
                            <label htmlFor="zipCode">CAP:</label>
                        </div>

                        <input type="text"
                            id="zipCode"
                            value={checkoutForm.zipCode}
                            onChange={(e) => SetCheckoutForm({ ...checkoutForm, zipCode: e.target.value })}
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
                                value={checkoutForm.discountCode}
                                onChange={(e) => SetCheckoutForm({ ...checkoutForm, discountCode: e.target.value })}
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
    )
}