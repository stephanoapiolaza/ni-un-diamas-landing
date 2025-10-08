import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {Check, Eye, Shield} from "lucide-react";
import emailjs from '@emailjs/browser';

const ActionSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleComplaintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      message: formData.get('message') as string,
      to_email: 'ni1diamas@gmail.com'
    };

    try {
      // Initialize EmailJS with your public key
      emailjs.init("ObiQ5ZNTr5B3iUEAO"); // This needs to be replaced with actual EmailJS public key
      
      await emailjs.send(
        "service_vu8bv0j", // This needs to be replaced with actual EmailJS service ID
        "template_idktesp", // This needs to be replaced with actual EmailJS template ID
        templateParams
      );
      
      setSubmitMessage("¡Solo falta un paso para ser socio, te responderemos a la brevedad!");
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage("Error al enviar la solicitud de socio de NI1Día+. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          {/* ✅ Alineamos los items del grid para que tengan la misma altura */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Formulario de Denuncia */}
            {/* ✅ 1. Añadimos h-full para que la tarjeta ocupe toda la altura y flex para distribuir el contenido */}
            <div className="bg-background p-8 rounded-sm border border-border h-full flex flex-col">
              {/* ✅ 2. Este div crecerá para empujar el botón hacia abajo */}
              <div className="flex-grow">
                <div className="mb-6">
                  <Eye className="h-10 w-10 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Presenta tu Denuncia</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comparte tu caso de manera confidencial
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-medium text-lg">
                    Defendamos a nuestros hijos
                  </p>
                  <p className="text-sm opacity-90 mt-6">
                    No estás solo/a en esto. Al presentar tu denuncia, activas una red de apoyo comprometida a orientarte y a luchar para que tu voz sea escuchada.
                  </p>
                </div>
                <div className="space-y-4 my-8 text-foreground/90">
                  <div className="flex items-start gap-x-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>Investigar quiénes están detrás de tu caso</span>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>Ver si tiene reclamos anteriores</span>
                  </div>
                  <div className="flex items-start gap-x-3">
                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <span>Informamos orientándote en el proceso</span>
                  </div>
                </div>
              </div>

              {/* ✅ 3. El botón y su texto ahora están fuera del div que crece */}
              <div>
                <p className="text-xs text-muted-foreground text-center mb-2">
                  Ver más información sobre el proceso
                </p>
                <Button
                    className="w-full"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfrTCwJHAKzoGEqRNOuDL2BHb0PNjtKHndrW-aBKx3x8_sFAQ/viewform", "_blank", "noopener,noreferrer")}
                >
                  Presenta tu Denuncia
                </Button>

              </div>
            </div>

            {/* Hazte Socio */}
            {/* ✅ 1. Repetimos la misma estructura: h-full y flex */}
            <div id="hazte-socio" className="bg-primary text-primary-foreground p-8 rounded-sm h-full flex flex-col">
              {/* ✅ 2. El contenido principal y el formulario crecerán */}
              <div className="flex-grow">
                <div className="mb-6">
                  <Shield className="h-10 w-10 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Hazte Socio</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Únete a nuestra causa
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-medium text-lg">
                    No Lucramos con el dolor
                  </p>
                  <p className="text-sm opacity-90 mb-6">
                    Nuestra cuenta corriente está abierta con número y clave disponibles para
                    total transparencia en el manejo de fondos.
                  </p>
                </div>
                <form onSubmit={handleComplaintSubmit} className="space-y-4">
                  {/* ... (Tus inputs de Nombre, Email, Mensaje no cambian) ... */}
                  <div className={"mt-2"}>
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" name="name" type="text" className="text-black" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" className="text-black" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje de Apoyo</Label>
                    <Textarea id="message" name="message" className="text-black" rows={4} required />
                  </div>
                </form>
                <Button type="submit"
                        variant="secondary"
                        className="w-full mt-4" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando mi apoyo..." : "Ser Socio NI1Día+"}
                </Button>
                {submitMessage && (
                    <p className={`text-sm text-center mt-2 ${submitMessage.includes("Error") ? "text-red-400" : "text-green-400"}`}>
                      {submitMessage}
                    </p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default ActionSection;