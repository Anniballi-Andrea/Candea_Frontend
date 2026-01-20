export default function Faq() {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <h2 className="faq-title text-center mb-4">
                            Domande frequenti
                        </h2>

                        <div className="accordion" id="faqAccordion">

                            {/* FAQ 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        Come posso effettuare un ordine?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Puoi effettuare un ordine direttamente dal nostro
                                        store online selezionando i prodotti che preferisci
                                        e completando il checkout in pochi semplici passaggi.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >
                                        Quali metodi di pagamento accettate?
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Accettiamo i principali metodi di pagamento sicuri
                                        come carte di credito, carte di debito e pagamenti digitali.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq3"
                                    >
                                        In quanto tempo riceverò il mio ordine?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Gli ordini vengono elaborati entro 24–48 ore
                                        lavorative. I tempi di consegna variano in base
                                        alla destinazione.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq4"
                                    >
                                        Di che materiali sono fatte le vostre candele?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Le nostre candele sono realizzate con materiali
                                        selezionati e fragranze di alta qualità,
                                        pensate per creare un’atmosfera rilassante e sicura.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq5"
                                    >
                                        Posso effettuare un reso?
                                    </button>
                                </h2>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Sì, puoi richiedere un reso entro 14 giorni
                                        dalla consegna, purché il prodotto non sia stato utilizzato.
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq6"
                                    >
                                        Il vostro brand promuove inclusione e sostenibilità?
                                    </button>
                                </h2>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Sì, crediamo in un ambiente inclusivo, equo
                                        e rispettoso. Il nostro impegno è offrire
                                        prodotti e un’esperienza accessibile a tutti.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
