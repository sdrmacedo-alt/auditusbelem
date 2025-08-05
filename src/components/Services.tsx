import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Settings, Headphones, Shield, Clock, UserCheck, ArrowRight, Phone } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: Stethoscope,
    title: "Avaliação Auditiva Completa",
    description: "Exame detalhado com equipamentos de última geração para diagnóstico preciso da sua condição auditiva.",
    features: ["Audiometria tonal", "Logoaudiometria", "Imitanciometria", "Emissões otoacústicas"],
    price: "Gratuito"
  }, {
    icon: Headphones,
    title: "Adaptação de Aparelhos",
    description: "Processo personalizado de seleção e adaptação do aparelho auditivo ideal para seu perfil e necessidades.",
    features: ["Seleção personalizada", "Ajustes finos", "Período de adaptação", "Acompanhamento técnico"],
    price: "Incluso"
  }, {
    icon: Settings,
    title: "Manutenção e Ajustes",
    description: "Serviços técnicos especializados para manter seu aparelho auditivo sempre funcionando perfeitamente.",
    features: ["Limpeza profissional", "Ajustes de software", "Verificação técnica", "Atualizações"],
    price: "A partir de R$ 50"
  }, {
    icon: Shield,
    title: "Garantia e Suporte",
    description: "Cobertura completa com suporte técnico especializado e garantia estendida para sua tranquilidade.",
    features: ["Garantia estendida", "Suporte 24/7", "Reparos cobertos", "Aparelho reserva"],
    price: "Incluso"
  }, {
    icon: UserCheck,
    title: "Acompanhamento Personalizado",
    description: "Monitoramento contínuo da sua adaptação com retornos regulares e ajustes conforme necessário.",
    features: ["Consultas de retorno", "Ajustes personalizados", "Orientações de uso", "Acompanhamento familiar"],
    price: "Incluso"
  }, {
    icon: Clock,
    title: "Atendimento Domiciliar",
    description: "Levamos nossos serviços até você com atendimento especializado no conforto da sua casa.",
    features: ["Visita domiciliar", "Avaliação no local", "Entrega e ajustes", "Flexibilidade de horários"],
    price: "Consulte valores"
  }];
  return <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos <span className="text-secondary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em saúde auditiva, 
            desde a avaliação inicial até o acompanhamento contínuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="card-premium h-full">
              <div className="flex flex-col h-full space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                    <div className="text-secondary font-semibold">{service.price}</div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">Inclui:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <Button className="btn-premium-secondary w-full group mt-auto">
                  Agendar Serviço
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>)}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-premium max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Pronto para iniciar sua Jornada Auditiva?</h3>
                <p className="text-lg text-muted-foreground">
                  Agende sua avaliação auditiva gratuita e descubra como podemos 
                  ajudá-lo a reconectar-se com o mundo dos sons.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-premium text-primary-foreground group">
                  <Phone className="mr-2 w-5 h-5" />
                  Ligar Agora: (11) 9999-9999
                </Button>
                <Button className="btn-premium-secondary group">
                  Agendar Online
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Gratuito</div>
                  <div className="text-muted-foreground">Avaliação Inicial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">30 dias</div>
                  <div className="text-muted-foreground">Período de Adaptação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Services;