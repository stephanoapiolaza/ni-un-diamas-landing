import { Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import CountUp from "react-countup";

const FollowerCounter = () => {
  return (
      <div className="text-left">
        <div className="text-3xl font-bold font-display">
          <CountUp end={160} duration={2.5} suffix="K" />
        </div>
        <p className="text-xs tracking-wider text-muted-foreground">SEGUIDORES EN REDES</p>
      </div>
  );
};

const Header = () => {
  return <header className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <FollowerCounter />
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4">
              <a href="https://www.instagram.com/ni1diamas_/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1">
                <Instagram className="h-4 w-4" />
                @ni1diamas_
              </a>
              <a href="https://www.youtube.com/@Ni1D%C3%ADaM%C3%A1ss" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1">
                <Youtube className="h-4 w-4" />
                @Ni1DíaMáss
              </a>
              <a href="mailto:contacto@ni1diamas.cl?subject=Quiero%20apoyo%20para%20fortalecer%20el%20vínculo%20con%20mi%20hijo" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1">
                <Mail className="h-4 w-4" />
                contacto@ni1diamas.cl
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