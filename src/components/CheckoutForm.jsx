import { useState } from "react";

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
        discountCode: "",
    };

    const [checkoutForm, setCheckoutForm] = useState(initialCheckoutForm);

    // Gestore universale per tutti gli input
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCheckoutForm({
            ...checkoutForm,
            [id]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Dati inviati:", checkoutForm);
        // Qui andrà la tua chiamata axios
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="checkout-card">
                <h2 className="checkout-title">Completamento Ordine</h2>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                        {/* --- SEZIONE ANAGRAFICA --- */}
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="custom-label">Nome</label>
                            <input type="text" id="firstName" className="custom-input" placeholder="Es: Mario"
                                value={checkoutForm.firstName} onChange={handleChange} required />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="secondName" className="custom-label">Cognome</label>
                            <input type="text" id="secondName" className="custom-input" placeholder="Es: Rossi"
                                value={checkoutForm.secondName} onChange={handleChange} required />
                        </div>

                        <div className="col-md-8">
                            <label htmlFor="email" className="custom-label">E-mail</label>
                            <input type="email" id="email" className="custom-input" placeholder="mario.rossi@esempio.it"
                                value={checkoutForm.email} onChange={handleChange} required />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="phone" className="custom-label">Cellulare</label>
                            <input type="tel" id="phone" className="custom-input" placeholder="333 0000000"
                                value={checkoutForm.phone} onChange={handleChange} required />
                        </div>

                        {/* --- SEZIONE INDIRIZZO --- */}
                        <div className="col-md-6">
                            <label htmlFor="city" className="custom-label">Città</label>
                            <input type="text" id="city" className="custom-input" placeholder="Es: Milano"
                                value={checkoutForm.city} onChange={handleChange} required />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="province" className="custom-label">Provincia</label>
                            <input type="text" id="province" className="custom-input" placeholder="MI" maxLength="2"
                                value={checkoutForm.province} onChange={handleChange} required />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="zipCode" className="custom-label">CAP</label>
                            <input type="text" id="zipCode" className="custom-input" placeholder="20100"
                                value={checkoutForm.zipCode} onChange={handleChange} required />
                        </div>

                        <div className="col-md-9">
                            <label htmlFor="street" className="custom-label">Via / Piazza</label>
                            <input type="text" id="street" className="custom-input" placeholder="Es: Via Roma"
                                value={checkoutForm.street} onChange={handleChange} required />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="streetNumber" className="custom-label">Civico</label>
                            <input type="number" id="streetNumber" className="custom-input" placeholder="10"
                                value={checkoutForm.streetNumber} onChange={handleChange} required />
                        </div>

                        {/* --- SEZIONE SCONTO --- */}
                        <div className="col-12 mt-4">
                            <div className="discount-box">
                                <label htmlFor="discountCode" className="custom-label">Hai un codice sconto?</label>
                                <div className="d-flex gap-2">
                                    <input type="text" id="discountCode" className="custom-input" style={{ maxWidth: '250px' }}
                                        placeholder="Inserisci codice" value={checkoutForm.discountCode} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- BOTTONE INVIO --- */}
                    <div className="row mt-5">
                        <div className="col-md-6 mx-auto">
                            <button type="submit" className="btn-checkout-submit">
                                EFFETTUA L'ORDINE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}