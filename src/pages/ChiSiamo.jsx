export default function ChiSiamo() {
    return (
        <section className="chi-siamo-section">
            <div className="container">

                {/* STORIA */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-9 text-center">
                        <h2 className="chi-siamo-title mb-3">La nostra storia</h2>
                        <p className="chi-siamo-text">
                            Viviamo in un mondo che corre veloce, dove il tempo per sé
                            sembra sempre meno. La nostra e-commerce nasce da questo
                            bisogno: rallentare e ritrovare piccoli momenti di calma.
                        </p>
                        <p className="chi-siamo-text">
                            Abbiamo iniziato creando candele per noi stessi,
                            come rituali serali dopo giornate intense.
                            Da quel gesto semplice è nata l’idea di condividere
                            questa sensazione con gli altri.
                        </p>
                    </div>
                </div>

                {/* VALORI */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-9">
                        <h2 className="chi-siamo-title text-center mb-4">I nostri valori</h2>
                        <div className="row text-center">
                            <div className="col-md-4 mb-3">
                                <div className="valore-card p-4 h-100">
                                    <h5>Calma</h5>
                                    <p>
                                        Crediamo nel rallentare, nel creare spazi di
                                        tranquillità che migliorano il benessere quotidiano.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="valore-card p-4 h-100">
                                    <h5>Qualità</h5>
                                    <p>
                                        Selezioniamo materiali e fragranze con cura,
                                        perché ogni dettaglio fa la differenza.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="valore-card p-4 h-100">
                                    <h5>Consapevolezza</h5>
                                    <p>
                                        Ogni candela è pensata per un consumo
                                        più attento e responsabile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DEI */}
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="chi-siamo-title mb-3">
                            Diversity, Equity & Inclusion
                        </h2>
                        <p className="chi-siamo-text">
                            Crediamo che il benessere sia per tutti.
                            Il nostro brand nasce per accogliere ogni persona,
                            senza distinzioni di genere, cultura, origine o identità.
                        </p>
                        <p className="chi-siamo-text">
                            Promuoviamo un ambiente inclusivo, equo e rispettoso,
                            sia nel nostro team che nella community che ci sceglie
                            ogni giorno.
                        </p>
                        <p className="chi-siamo-quote mt-4">
                            La luce è la stessa per tutti.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
