import { Mail, Facebook, Instagram, Youtube } from "lucide-react";
const Header = () => {
  return <header className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">Ni Un Día Más</h1>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-4">
              
              
              <a href="mailto:contacto@ni1diamas.cl" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Mail
              </a>
            </nav>
          </div>
        </div>
        
        
      </div>
    </header>;
};
export default Header;