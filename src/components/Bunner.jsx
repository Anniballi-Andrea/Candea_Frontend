export default function Bunner() {
    return (
        <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
            {/* Background: Immagine di sfondo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/candelaInvernale.png"
                    alt="Sfondo stilizzato invernale"
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay per scurire l'immagine e leggere meglio il testo */}
                <div className="absolute inset-0 bg-black opacity-45"></div>
            </div>

            {/* Contenuto Testuale: Scalato per un'altezza di 200px */}
            <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight drop-shadow-lg">
                    Essenza d'Inverno
                </h1>

                <p className="hidden md:block text-sm md:text-base text-gray-200 font-medium drop-shadow-md mt-1">
                    Scopri la nuova collezione di candele artigianali natalizie.
                </p>

                <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-sm hover:bg-gray-200 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] drop-shadow-lg">
                    Scopri la collezione
                </button>
            </div>
        </section>
    );
}