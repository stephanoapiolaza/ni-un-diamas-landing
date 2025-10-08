import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {Check, Eye, Shield} from "lucide-react";
import emailjs from '@emailjs/browser';

const ActionSection = () => {
  const [isCopied, setIsCopied] = useState(false);
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

  const handleCopyBankingData = async () => {
    const bankingData = "Banco: Scotiabank | RUT: 9.999.999-9 | Tipo: Cuenta Corriente | Cuenta: 12345678 | Nombre: Rodrigo Smart";
    
    try {
      await navigator.clipboard.writeText(bankingData);
      setIsCopied(true);
      // Volver al texto original después de 2 segundos
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = bankingData;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Error en el fallback de copia:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario de Denuncia */}
          <div className="bg-background p-8 rounded-sm border border-border">
            <div className="mb-6">
              <Eye className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Presenta tu Denuncia</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comparte tu caso de manera confidencial
              </p>

              <p className="text-sm opacity-90">
                Nuestra cuenta corriente está abierta con número y clave disponibles para
                total transparencia en el manejo de fondos.
              </p>

              {/* ✅ LISTA MEJORADA: Usamos un div con flexbox y el ícono de Check */}
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

              <Button
                  className="w-full mt-6"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfrTCwJHAKzoGEqRNOuDL2BHb0PNjtKHndrW-aBKx3x8_sFAQ/viewform", "_blank")}
              >
                Presenta tu Denuncia
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Ver más información sobre el proceso
              </p>
            </div>
            

          </div>

          {/* Hazte Socio */}
          <div id="hazte-socio" className="bg-primary text-primary-foreground p-8 rounded-sm">
            <div className="mb-6">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Hazte Socio</h3>
              <p className="text-sm mb-4 opacity-90">
                Únete a nuestra causa
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="font-medium text-lg">
                No Lucramos con el dolor
              </p>
              <p className="text-sm opacity-90">
                Nuestra cuenta corriente está abierta con número y clave disponibles para 
                total transparencia en el manejo de fondos.
              </p>

              <form onSubmit={handleComplaintSubmit} className="space-y-4">
                <div>
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

                <Button type="submit"
                        variant="secondary"
                        className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando mi apoyo..." : "Ser Socio NI1Día+"}
                </Button>

                {submitMessage && (
                    <p className={`text-sm text-center ${submitMessage.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                      {submitMessage}
                    </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ActionSection;