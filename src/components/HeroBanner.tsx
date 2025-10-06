import { useState, useEffect } from "react";

const messages = [
  "El Vínculo es un Derecho",
  "Protegemos a nuestros hijos",
  "Juntos por la justicia familiar"
];

const HeroBanner = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-primary text-primary-foreground py-32 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[4rem] transition-opacity duration-500">
            {messages[currentMessage]}
          </h2>
          <div className="flex justify-center gap-2 mt-8">
            {messages.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentMessage ? "bg-primary-foreground w-8" : "bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
