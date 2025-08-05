import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-primary-foreground/80 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Localize sua Loja</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Nossas Lojas</h3>
                  <div className="space-y-3">
                    <a href="https://maps.app.goo.gl/2tMj7BMHFyQQfYn87?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-3 border rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold">Auditus Belém</h4>
                      <p className="text-sm text-muted-foreground">Pará</p>
                    </a>
                    <a href="https://maps.app.goo.gl/aTQ1GRZF6g2GcAGL7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-3 border rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold">Auditus Fortaleza</h4>
                      <p className="text-sm text-muted-foreground">Ceará</p>
                    </a>
                    <div className="p-3 border rounded-lg hover:bg-accent transition-colors">
                      <h4 className="font-semibold">Auditus São Luís</h4>
                      <p className="text-sm text-muted-foreground">Maranhão</p>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
      <nav className="container mx-auto px-4 py-1 bg-secondary">
        <div className="flex justify-between items-center">
          {/* Left menu - Desktop only */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Início</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Sobre</a>
            <a href="#aparelhos" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Aparelhos</a>
          </div>

          {/* Centered Logo */}
          <div className="flex flex-col items-center justify-center mx-auto">
            <img src="/lovable-uploads/01d510ef-f009-4aca-9995-d63fede3bf58.png" alt="AUDITUS" className="h-32 lg:h-40 w-auto drop-shadow-lg" />
          </div>

          {/* Right menu and CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-8 mr-6">
              <a href="#marcas" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Marcas</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Serviços</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-semibold text-lg hover:scale-105 transform duration-200">Contato</a>
            </div>
            <Button className="btn-premium text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
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