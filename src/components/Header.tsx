import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Menu, X, Phone, MapPin, Clock, MoreHorizontal, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
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
                  
                  <div className="border border-border rounded-lg p-3">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-gray-700">Nossas Lojas</h4>
                    </div>
                    <div className="space-y-2 ml-8">
                      <a href="https://maps.app.goo.gl/2tMj7BMHFyQQfYn87?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:border-2 hover:border-red-500 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <img
                            src="/lovable-uploads/19b7412f-7c9a-4048-9fab-af1c6e415cb6.png"
                            alt="Ícone da loja Auditus"
                             className="w-8 h-8 object-contain drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <div className="font-medium text-gray-700">Auditus Belém</div>
                            <div className="text-xs text-gray-500">Pará</div>
                          </div>
                        </div>
                      </a>
                      <a href="https://maps.app.goo.gl/aTQ1GRZF6g2GcAGL7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:border-2 hover:border-red-500 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <img
                            src="/lovable-uploads/19b7412f-7c9a-4048-9fab-af1c6e415cb6.png"
                            alt="Ícone da loja Auditus"
                              className="w-8 h-8 object-contain drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <div className="font-medium text-gray-700">Auditus Fortaleza</div>
                            <div className="text-xs text-gray-500">Ceará</div>
                          </div>
                        </div>
                      </a>
                      <a href="https://maps.app.goo.gl/Ad4boE9j8QixStd28?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="block p-2 border border-border rounded hover:border-2 hover:border-red-500 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <img
                            src="/lovable-uploads/19b7412f-7c9a-4048-9fab-af1c6e415cb6.png"
                            alt="Ícone da loja Auditus"
                            className="w-8 h-8 object-contain drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                            loading="lazy"
                            decoding="async"
                          />
                          <div>
                            <div className="font-medium text-gray-700">Auditus São Luís</div>
                            <div className="text-xs text-gray-500">Maranhão</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-gray-700">Horário de Funcionamento</h4>
                      <p className="text-sm text-gray-600">Seg-Sex: 8h-18h, Sáb: 9h-12h</p>
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
          {/* Mobile menu button - Left side */}
          <button onClick={toggleMenu} className="p-2 text-white flex items-center space-x-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="text-sm font-medium">Menu</span>
          </button>

          {/* Centered Logo */}
          <div className="flex flex-col items-center justify-center mx-auto">
            <img src="/lovable-uploads/97ac276d-3508-4f6a-9e64-dd2ffba4013c.png" alt="Logo AUDITUS Aparelhos Auditivos" className="h-24 sm:h-28 md:h-32 lg:h-32 w-auto max-w-[230px] object-contain filter brightness-0 invert drop-shadow-[0_4px_14px_hsl(var(--foreground)/0.35)]" fetchPriority="high" decoding="async" />
          </div>

          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="absolute top-full left-4 z-50 mt-2 py-2 bg-white rounded-lg shadow-lg border border-gray-200 w-64 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <a href="#home" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Início</a>
              <div className="w-full h-px bg-gray-200 my-0.5"></div>
              <a href="#sobre-auditus" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Sobre</a>
              <div className="w-full h-px bg-gray-200 my-0.5"></div>
              <a href="https://www.resound.com/pt-br/hearing-aids/bluetooth-hearing-aids" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Aparelhos</a>
              <div className="w-full h-px bg-gray-200 my-0.5"></div>
              <a href="#marcas" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Marcas</a>
              <div className="w-full h-px bg-gray-200 my-0.5"></div>
              <a href="#servicos" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Serviços</a>
              <div className="w-full h-px bg-gray-200 my-0.5"></div>
              <a href="#contato" className="text-gray-700 font-bold hover:text-white hover:bg-red-500 transition-all duration-200 py-2 px-3 rounded-md text-sm" onClick={toggleMenu}>Contato</a>
              <div className="w-full h-1 bg-gradient-to-r from-gray-100 to-gray-200 my-1"></div>
              <a href="https://wa.me/5591981214819" target="_blank" rel="noopener noreferrer">
                <Button className="btn-premium text-primary-foreground mt-1 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm py-2 px-4 mx-[10px]">
                  Agende Sua Consulta
                </Button>
              </a>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;