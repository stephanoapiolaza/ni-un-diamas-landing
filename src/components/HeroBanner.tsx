import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import familia1 from "@/assets/familia_1.png";
import familia2 from "@/assets/familia_2.png";
import familia3 from "@/assets/familia_3.png";

const slides = [
  {
    title: () => (
        <>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            NO+ <br/>  <strong className="font-black">LUCRO</strong>  <label className="text-xl md:text-2xl lg:text-3xl  tracking-tighter mb-8 opacity-90 font-extralight">
            CON NUESTROS HIJOS
          </label>
          </h1>
        </>
    ),
    subtitle: () => null,
    category: "NO SON UN NEGOCIO",
    buttonText: "Conoce la Causa",
    link: "https://www.instagram.com/reel/DOvzorSkXZF/?igsh=MTNhdnQ2Ym5qM3Q4aQ==",
    navbarText: "No son un negocio",
    backgroundImage: familia1
  },
  {
    title: () => (
        <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
        NO
      </h1>
    ),
    subtitle: () => (
        <label className="font-serif text-xl md:text-4xl mb-8  tracking-tighter opacity-90 font-semibold">
          SIGAS DAÑANDO A LO <br/> QUE DICES MÁS AMAR
        </label>
    ),
    category: "EL DAÑO ES IRREVERSIBLE",
    buttonText: "Ver Historia",
    link: "https://www.instagram.com/reel/DOvUF7rDjy8/?igsh=bm9ndHdzYmhnMjM4",
    navbarText: "El daño es irreversible",
    backgroundImage: familia2
  },
  {
    title: () => (
        <>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            NO uses
          </h1>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            A NUESTROS HIJOS
          </h1>
        </>
    ),
    subtitle: () => (
        <label className="font-serif text-lg md:text-xl lg:text-3xl  tracking-tighter mb-8 opacity-90 font-extralight">
          COMO MONEDA DE CAMBIO
        </label>
    ),
    category: "CUIDEMOS SU SALUD MENTAL",
    buttonText: "Actúa Ahora",
    link: "https://www.instagram.com/reel/DOixDK8kTC_/?igsh=MTZhcGphM2g0Y2podQ==",
    navbarText: "Cuidemos su salud mental",
    backgroundImage: familia3
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentSlide((prev) => (prev + 1) % slides.length);
    // }, 6000);
    //
    // return () => clearInterval(interval);
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
                {slide.navbarText}
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
            <div className="relative h-full flex">
              <div className="w-full lg:w-3/4 container mx-auto px-8 lg:px-28 flex justify-center items-start flex-col text-left">
                {slide.title()}
                  <div>
                      {slide.subtitle()}
                      <p className="font-display text-xl md:text-5xl font-extrabold tracking-tighter opacity-90 text-yellow-400 mb-8 mt-4">
                          {slide.category}
                      </p>
                  </div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-sm px-8"
                  onClick={() => window.open(slide.link, "_blank")}
                >
                  {slide.buttonText}
                </Button>
              </div>
              { /* Logo */ }
              <div className="hidden lg:flex w-1/4 container mx-auto justify-center items-start flex-col">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight">
                  NI1
                </h1>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight">
                  DÍA+
                </h1>
                <p className="font-heading text-lg md:text-xl mb-8 opacity-90 font-bold">
                  Sin nuestros hijos
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
