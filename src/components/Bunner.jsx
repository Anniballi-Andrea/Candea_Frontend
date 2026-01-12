export default function Bunner() {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background: Qui useremo un'immagine generata più stilizzata */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549488313-fd089f2a991f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                    alt="Sfondo stilizzato invernale"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Sovrapposizione per scurire e integrare meglio il testo */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Contenuto Testuale al centro dell'immagine */}
            <div className="relative z-10 text-center max-w-md mx-auto px-4 space-y-4">
                <h1 className="text-5xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                    Essenza d'Inverno
                </h1>
                <p className="text-lg text-gray-200 font-medium drop-shadow-md">
                    Scopri la nuova collezione di candele artigianali ispirate ai profumi del bosco e del Natale.
                </p>
                <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-all duration-300 uppercase text-sm tracking-widest drop-shadow-lg">
                    Scopri la collezione
                </button>
            </div>
        </section>
    )
}