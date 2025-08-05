import { Card } from '@/components/ui/card';
import { Award, Heart, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência",
      description: "Mais de 15 anos oferecendo soluções auditivas premium com tecnologia de ponta."
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada cliente é único. Oferecemos atendimento personalizado para suas necessidades específicas."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e constantemente atualizados nas mais novas tecnologias."
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Parceiros das marcas premium GN ReSound e Beltone para soluções inovadoras."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre a <span className="text-secondary">AUDITUS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especializados em soluções auditivas premium, oferecendo 
            tecnologia de ponta e atendimento personalizado para melhorar 
            sua qualidade de vida através de uma audição natural.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Nossa Missão é Reconectar Você ao Mundo dos Sons
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No AUDITUS, acreditamos que a audição é fundamental para uma vida plena. 
                Nossa missão é proporcionar soluções auditivas que não apenas restaurem 
                a audição, mas que ofereçam uma experiência sonora natural e confortável.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como representantes oficiais das marcas GN ReSound e Beltone, 
                oferecemos tecnologia de última geração com o respaldo de anos 
                de pesquisa e desenvolvimento em soluções auditivas.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
              <h4 className="text-xl font-semibold text-primary mb-4">Por que escolher o AUDITUS?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Atendimento personalizado e humanizado
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Tecnologia premium das marcas líderes mundiais
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Suporte técnico especializado
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Garantia e acompanhamento pós-venda
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Anos no Mercado</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground">Vidas Transformadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Marcas Premium</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;