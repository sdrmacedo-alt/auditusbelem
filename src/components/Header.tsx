import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu, X, Phone, MapPin, Clock, MoreHorizontal } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar with contact info */}
      {/* Menu dropdown */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center space-x-2 p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Nossas Lojas</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-white border border-border shadow-elegant rounded-lg">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-800">Informações de Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-2 hover:border-red-500 transition-all duration-200">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-gray-700">Telefone</h4>
                      <p className="text-sm text-gray-600">(91) 99349-2104</p>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-3 hover:border-2 hover:border-red-500 transition-all duration-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-gray-700">Nossas Lojas</h4>
                    </div>
                    <div className="space-y-2 ml-8">
                      <a href="https://maps.app.goo.gl/2tMj7BMHFyQQfYn87?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:bg-gray-50 hover:border-primary/20 transition-all duration-200">
                        <div className="font-medium text-gray-700">Auditus Belém</div>
                        <div className="text-xs text-gray-500">Pará</div>
                      </a>
                      <a href="https://maps.app.goo.gl/aTQ1GRZF6g2GcAGL7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:bg-gray-50 hover:border-primary/20 transition-all duration-200">
                        <div className="font-medium text-gray-700">Auditus Fortaleza</div>
                        <div className="text-xs text-gray-500">Ceará</div>
                      </a>
                      <a href="https://maps.app.goo.gl/Ad4boE9j8QixStd28?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:bg-gray-50 hover:border-primary/20 transition-all duration-200">
                        <div className="font-medium text-gray-700">Auditus São Luís</div>
                        <div className="text-xs text-gray-500">Maranhão</div>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:border-2 hover:border-red-500 transition-all duration-200">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-gray-700">Horário de Funcionamento</h4>
                      <p className="text-sm text-gray-600">Seg-Sex: 8h-18h</p>
                    </div>
                  </div>

                  <a href="https://wa.me/5591981214819" target="_blank" rel="noopener noreferrer" className="block p-3 border border-border rounded-lg bg-gray-50 hover:border-2 hover:border-red-500 transition-all duration-200 cursor-pointer">
                    <div className="font-semibold text-gray-700 text-center">Teste Auditivo Gratuito</div>
                    <p className="text-xs text-gray-500 text-center mt-1">Agende já sua consulta</p>
                  </a>
                </div>
              </div>
            </PopoverContent>
          </Popover>
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