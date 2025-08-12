import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/97ac276d-3508-4f6a-9e64-dd2ffba4013c.png" alt="Logo AUDITUS Aparelhos Auditivos" className="h-20 sm:h-24 md:h-28 w-auto object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_hsl(var(--foreground)/0.25)]" loading="lazy" decoding="async" />
              
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">Na Auditus, cada som tem um sentido, reconectamos você com o que realmente importa: suas histórias, seus laços, sua vida.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

         

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Loja 1 */}
              <div className="space-y-3">
                <div className="text-lg font-medium">AUDITUS BELÉM</div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <div>Trav. Dom Romualdo de Seixas, 832</div>
                    <div>Umarizal - Belém, PA</div>
                    <div>CEP: 66050-110</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/80 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <span>(91) 98121-4819</span>
                      <a href="https://wa.me/5591981214819" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - Belém" className="p-1.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                        <SiWhatsapp className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                    <div>(91) 3242-3546</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">contato@auditusbelem.com.br</div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <div>Seg-Sex: 8h às 18h</div>
                    <div>Sábado: 9h às 12h</div>
                  </div>
                </div>
              </div>

              {/* Loja 2 */}
              <div className="space-y-3">
                <div className="text-lg font-medium">AUDITUS FORTALEZA</div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">Rua Monsenhor Bruno, 1153 Ed Scopa. Aldeota Fortaleza, CE
CEP: 60140-190
                </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/60 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <span>(85) 99221-6433</span>
                      <a href="https://wa.me/5585992216433" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - Fortaleza" className="p-1.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                        <SiWhatsapp className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                    <div>(85) 3099-2555</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">contato@auditusfortaleza.com.br</div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">Seg-Sex: 9h às 18h
Sábado: 9h às 12h
                </div>
                </div>
              </div>

              {/* Loja 3 */}
              <div className="space-y-3">
                <div className="text-lg font-medium">AUDITUS SÃO LUÍS</div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">Av. Professor Carlos Cunha. Ed. Medical Jaracaty, sala: 813
CEP:65076-908
                </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/60 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <span>(98) 98111-7197</span>
                      <a href="https://wa.me/5598981117197" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - São Luís" className="p-1.5 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                        <SiWhatsapp className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                    <div>(98) 3221-3022</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">contato@auditussaoluis.com.br</div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/60">Seg-Sex: 8h às 18h
Sábado9h às 12h
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Representantes Oficiais</h4>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-2xl font-bold tracking-wider">GN RESOUND</div>
              <div className="w-px h-8 bg-primary-foreground/20"></div>
              <div className="text-2xl font-bold tracking-wider">BELTONE</div>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              Marcas premium do Grupo GN Hearing
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 AUDITUS Aparelhos Auditivos. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;