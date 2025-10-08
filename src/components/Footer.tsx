import { Instagram, Youtube, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/ni1diamas_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@ni1diamas_</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.youtube.com/@Ni1D%C3%ADaM%C3%A1ss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Youtube className="h-5 w-5" />
              <span className="text-sm">@Ni1DíaMáss</span>
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="mailto:contacto@ni1diamas.cl?subject=Quiero%20apoyo%20para%20fortalecer%20el%20vínculo%20con%20mi%20hijo" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-5 w-5" />
              <span className="text-sm">contacto@ni1diamas.cl</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">© 2025 Ni Un Día Más</p>
          <p className="text-sm opacity-80">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;