import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return <header className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logo} alt="Ni Un Día Más" className="h-12 w-auto" />
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4">
              <a href="mailto:contacto@ni1diamas.cl" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Mail
              </a>
            </nav>
            <Button asChild variant="default">
              <a href="#hazte-socio">Hazte Socio</a>
            </Button>
          </div>
        </div>
        
        
      </div>
    </header>;
};
export default Header;