import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Youtube className="h-5 w-5" />
              <span className="text-sm">Canal de Youtube</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@niundiamas.org"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">info@niundiamas.org</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">© 2025 Ni Un Día Más. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
