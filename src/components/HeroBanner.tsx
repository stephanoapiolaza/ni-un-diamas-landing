import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "El Vínculo es un Derecho",
    subtitle: "Protegiendo la relación fundamental entre hijos y progenitores"
  },
  {
    title: "Protegemos a nuestros hijos",
    subtitle: "Luchando contra la obstaculización de visitas"
  },
  {
    title: "Juntos por la justicia familiar",
    subtitle: "Restaurando vínculos, defendiendo derechos"
  }
];

const HeroBanner = () => {
  const [plugin] = useState(() => 
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="relative bg-primary text-primary-foreground">
      <Carousel
        plugins={[plugin]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10" />
                
                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
        <CarouselNext className="right-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;
