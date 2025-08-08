import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Entre em contato conosco e dê o primeiro 
            passo para uma vida com melhor audição.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Informações de Contato</h3>
              
              <div className="space-y-8">
                {/* Loja 1 - Belém */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <img src="/lovable-uploads/e332bcc7-33f7-4089-b5cc-944310fc0047.png" alt="Ícone Auditus" className="h-5 w-auto object-contain" loading="lazy" decoding="async" />
                    <span>AUDITUS BELÉM</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Trav. Dom Romualdo de Seixas, 832</div>
                      <div>Umarizal - Belém, PA</div>
                      <div>CEP: 66050-110</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <span>(91) 98121-4819</span>
                        <a href="https://wa.me/5591981214819" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - Belém" className="p-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
                          <SiWhatsapp className="w-4 h-4 text-primary" />
                        </a>
                      </div>
                      <div>(91) 3242-3546</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">contato@auditusbelem.com.br</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Seg-Sex: 8h às 18h</div>
                      <div>Sábado: 9h às 12h</div>
                    </div>
                  </div>
                </div>

                {/* Loja 2 - Fortaleza */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <img src="/lovable-uploads/e332bcc7-33f7-4089-b5cc-944310fc0047.png" alt="Ícone Auditus" className="h-5 w-auto object-contain" loading="lazy" decoding="async" />
                    <span>AUDITUS FORTALEZA</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Rua Monsenhor Bruno, 1153 Ed Scopa. Aldeota</div>
                      <div>Fortaleza, CE</div>
                      <div>CEP: 60140-190</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <span>(85) 99221-6433</span>
                        <a href="https://wa.me/5585992216433" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - Fortaleza" className="p-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
                          <SiWhatsapp className="w-4 h-4 text-primary" />
                        </a>
                      </div>
                      <div>(85) 3099-2555</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">contato@auditusfortaleza.com.br</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Seg-Sex: 9h às 18h</div>
                      <div>Sábado: 9h às 12h</div>
                    </div>
                  </div>
                </div>

                {/* Loja 3 - São Luís */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                    <img src="/lovable-uploads/e332bcc7-33f7-4089-b5cc-944310fc0047.png" alt="Ícone Auditus" className="h-5 w-auto object-contain" loading="lazy" decoding="async" />
                    <span>AUDITUS SÃO LUÍS</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Av. Professor Carlos Cunha. Ed. Medical Jaracaty, Sla: 813</div>
                      <div>São Luís, MA</div>
                      <div>CEP: 65076-908</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex items-center justify-between gap-3">
                        <span>(98) 98111-7197</span>
                        <a href="https://wa.me/5598981117197" target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp - São Luís" className="p-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
                          <SiWhatsapp className="w-4 h-4 text-primary" />
                        </a>
                      </div>
                      <div>(98) 3221-3022</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">contato@auditussaoluis.com.br</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <div>Seg-Sex: 8h às 18h</div>
                      <div>Sábado: 9h às 12h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="card-premium">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Ações Rápidas</h4>
                <div className="space-y-3">
                  <Button className="btn-premium w-full text-primary-foreground group">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
                    <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="btn-premium-secondary w-full group">
                    <Calendar className="mr-2 w-5 h-5" />
                    Agendar Online
                    <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="btn-premium-secondary w-full group">
                    <Phone className="mr-2 w-5 h-5" />
                    Ligar Agora
                    <ArrowRight className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Envie uma Mensagem</h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Nome Completo *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Telefone *
                      </label>
                      <Input 
                        placeholder="(11) 99999-9999"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        E-mail *
                      </label>
                      <Input 
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-2">
                        Assunto
                      </label>
                      <Input 
                        placeholder="Como podemos ajudar?"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Conte-nos sobre sua necessidade ou dúvida..."
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div className="bg-gradient-card rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <div className="text-sm text-muted-foreground">
                        Li e concordo com a{' '}
                        <a href="#" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>{' '}
                        e autorizo o contato da AUDITUS para esclarecimentos sobre 
                        soluções auditivas e agendamento de consultas.
                      </div>
                    </div>
                  </div>

                  <Button className="btn-premium w-full text-primary-foreground group">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <Card className="card-premium">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Nossa Localização</h3>
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">
                    Mapa interativo será carregado aqui
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rua das Flores, 123 - Centro, São Paulo - SP
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;