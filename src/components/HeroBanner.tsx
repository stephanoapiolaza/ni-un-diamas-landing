import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import familia1 from "@/assets/familia_1.jpg";
import familia2 from "@/assets/familia_2.jpg";
import familia3 from "@/assets/familia_3.jpeg";

const slides = [
  {
    category: "FAMILIAS",
    title: "El Vínculo es un Derecho Fundamental",
    subtitle: "Protegiendo la relación entre hijos y progenitores",
    backgroundImage: familia1
  },
  {
    category: "JUSTICIA",
    title: "Protegemos a nuestros hijos",
    subtitle: "Luchando contra la obstaculización de visitas",
    backgroundImage: familia2
  },
  {
    category: "UNIDOS",
    title: "Juntos por la justicia familiar",
    subtitle: "Restaurando vínculos, defendiendo derechos",
    backgroundImage: familia3
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-primary text-primary-foreground">
      {/* Navigation tabs */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-8 py-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative whitespace-nowrap text-sm font-medium transition-all pb-2 ${
                  index === currentSlide
                    ? "text-primary-foreground"
                    : "text-primary-foreground/50 hover:text-primary-foreground/80"
                }`}
              >
                {slide.title}
                {index === currentSlide && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-fade-in" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slides */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Background darkening overlay */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-end pb-20">
              <div className="max-w-3xl">
                <p className="text-xs font-bold tracking-widest mb-4 opacity-90">
                  {slide.category}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="rounded-sm px-8"
                >
                  Leer Historia
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
