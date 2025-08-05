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
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123<br />
                      Centro - São Paulo, SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Telefone</h4>
                    <p className="text-muted-foreground">
                      (11) 9999-9999<br />
                      (11) 3333-3333
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@auditus.com.br<br />
                      agendamento@auditus.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
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