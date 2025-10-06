import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Shield } from "lucide-react";
const ActionSection = () => {
  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
            </div>
            
            <form onSubmit={handleComplaintSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" required />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              
              <div>
                <Label htmlFor="message">Tu caso</Label>
                <Textarea id="message" rows={4} required />
              </div>
              
              <Button type="submit" className="w-full">
                Enviar Denuncia
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ver más información sobre el proceso
              </p>
            </form>
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
              
              <div className="bg-primary-foreground/10 p-4 rounded-sm mt-6">
                <p className="text-sm font-medium mb-2">Cuenta Corriente:  XXXX-XXXX-XXXX
Banco:  Scotiabank
Rut: 9.999.999-9
Email: contacto@ni1diamas.cl</p>
                <p className="text-xs opacity-90">Disponible para socios activos</p>
              </div>
              
              <Button variant="secondary" className="w-full mt-6">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ActionSection;