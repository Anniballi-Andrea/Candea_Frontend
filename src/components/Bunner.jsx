import { useState } from "react";

const slides = [
    {
        id: 1,
        title: "Respiro d'inverno",
        subtitle: "Candele artigianali con note di cannella e pino.",
        image: "/candelaInvernale.png"
    },
    {
        id: 2,
        title: "soffio di primavera",
        subtitle: "Note floreali e freschezza per rinascere con la natura.",
        image: "/candelaPrimavera.png"
    },
    {
        id: 3,
        title: "Profumo di vacanza",
        subtitle: "Agrumi e brezza marina per le tue serate all'aperto.",
        image: "/candelaEstate.png"
    },
    {
        id: 4,
        title: "Incanto d'Autunno",
        subtitle: "Profumi di zucca, spezie e foglie cadenti.",
        image: "/candelaAutunno.png"
    },
];

export default function InfiniteSlider() {
    // Creazione del nastro infinito: [Autunno, Inverno, Primavera, Estate, Autunno, Inverno]
    const extendedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0]
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        // Reset della posizione senza animazione per l'effetto loop
        if (currentIndex === extendedSlides.length - 1) {
            setCurrentIndex(1);
        } else if (currentIndex === 0) {
            setCurrentIndex(extendedSlides.length - 2);
        }
    };

    return (
        <section className="slider-container">
            <div
                className="slider-track"
                onTransitionEnd={handleTransitionEnd}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)" : "none"
                }}
            >
                {extendedSlides.map((slide, index) => (
                    <div className="slide" key={`${slide.id}-${index}`}>
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-overlay"></div>
                        <div className="slide-content">
                            <h1 className="slide-title">{slide.title}</h1>
                            <p className="slide-subtitle">{slide.subtitle}</p>
                            <button className="banner-button">Scopri la collezione</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Frecce */}
            <button className="nav-btn prev" onClick={handlePrev}>
                <span className="arrow">‹</span>
            </button>
            <button className="nav-btn next" onClick={handleNext}>
                <span className="arrow">›</span>
            </button>

            {/* Pallini (Dots) */}
            <div className="dots-container">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${currentIndex === i + 1 ||
                            (currentIndex === 0 && i === slides.length - 1) ||
                            (currentIndex === extendedSlides.length - 1 && i === 0)
                            ? 'active' : ''
                            }`}
                        onClick={() => !isTransitioning && setCurrentIndex(i + 1)}
                    />
                ))}
            </div>
        </section>
    );
}