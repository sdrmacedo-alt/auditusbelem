import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h-18h</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Teste Auditivo Gratuito</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 bg-red-600">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/01d510ef-f009-4aca-9995-d63fede3bf58.png" alt="AUDITUS" className="h-12 w-auto" />
            
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#aparelhos" className="text-foreground hover:text-primary transition-colors">Aparelhos</a>
            <a href="#marcas" className="text-foreground hover:text-primary transition-colors">Marcas</a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-premium text-primary-foreground">
              Agende Sua Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Início</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Sobre</a>
              <a href="#aparelhos" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Aparelhos</a>
              <a href="#marcas" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Marcas</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Serviços</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contato</a>
              <Button className="btn-premium text-primary-foreground mt-4">
                Agende Sua Consulta
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;