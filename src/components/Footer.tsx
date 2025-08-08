import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/97ac276d-3508-4f6a-9e64-dd2ffba4013c.png" alt="Logo AUDITUS Aparelhos Auditivos" className="h-16 sm:h-20 md:h-24 w-auto object-contain filter brightness-0 invert drop-shadow-[0_2px_10px_hsl(var(--foreground)/0.25)]" loading="lazy" decoding="async" />
              
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

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Rápidos</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sobre Nós
              </a>
              <a href="#aparelhos" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Aparelhos Auditivos
              </a>
              <a href="#marcas" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Marcas Premium
              </a>
              <a href="#servicos" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Serviços
              </a>
              <a href="#contato" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Nossos Serviços</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/80">Avaliação Auditiva Gratuita</div>
              <div className="text-primary-foreground/80">Adaptação de Aparelhos</div>
              <div className="text-primary-foreground/80">Manutenção Técnica</div>
              <div className="text-primary-foreground/80">Atendimento Domiciliar</div>
              <div className="text-primary-foreground/80">Garantia Estendida</div>
              <div className="text-primary-foreground/80">Suporte 24/7</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Rua das Flores, 123</div>
                  <div>Centro - São Paulo, SP</div>
                  <div>CEP: 01234-567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>(11) 9999-9999</div>
                  <div>(11) 3333-3333</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  contato@auditus.com.br
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Seg-Sex: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
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