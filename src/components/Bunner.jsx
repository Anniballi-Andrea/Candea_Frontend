

export default function Banner() {
    return (
        <section className="banner-container">
            {/* Background: Immagine e Overlay */}
            <div className="banner-background">
                <img
                    src="/candelaInvernale.png"
                    alt="Sfondo stilizzato invernale"
                    className="banner-image"
                />
                <div className="banner-overlay"></div>
            </div>

            {/* Contenuto Testuale */}
            <div className="banner-content">
                <h1 className="banner-title">
                    Essenza d'Inverno
                </h1>

                <p className="banner-subtitle">
                    Scopri la nuova collezione di candele artigianali natalizie.
                </p>

                <button className="banner-button">
                    Scopri la collezione
                </button>
            </div>
        </section>
    );
}