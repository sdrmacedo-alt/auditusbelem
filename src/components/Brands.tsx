import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Headphones } from 'lucide-react';
const Brands = () => {
  return <section id="marcas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Marcas <span className="text-secondary">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos representantes oficiais das marcas líderes mundiais em soluções auditivas, 
            oferecendo tecnologia de ponta e qualidade incomparável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* GN ReSound */}
          <Card className="card-premium group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">GN ReSound</h3>
                    <p className="text-muted-foreground">Inovação Dinamarquesa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A GN ReSound é pioneira em tecnologia auditiva há mais de 150 anos. 
                Seus aparelhos auditivos oferecem som natural, conectividade avançada 
                e design discreto, proporcionando uma experiência auditiva excepcional.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Tecnologia Smart 3D para audição natural</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Conectividade Bluetooth avançada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Bateria recarregável de longa duração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Design discreto e confortável</span>
                </div>
              </div>

              <div className="bg-gradient-card rounded-xl p-4">
                <h4 className="font-semibold text-primary mb-2">• ReSound ENZO - Nosso aparelho auditivo para perda auditiva severa a profunda.</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• ReSound NEXIA - Som individualizado</div>
                  <div>• ReSound OMNIA - Audição em 360°</div>
                  <div>• ReSound ENZO - Conectividade total</div>
                  <div>• ReSound KEY - Tecnologia inteligente</div>
                </div>
              </div>

              <Button 
                className="btn-premium-secondary w-full group"
                onClick={() => window.open('https://www.resound.com/pt-br/hearing-aids/bluetooth-hearing-aids', '_blank')}
              >
                Conheça os Produtos ReSound
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Beltone */}
          <Card className="card-premium group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Beltone</h3>
                    <p className="text-muted-foreground">Tradição Americana</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                A Beltone possui mais de 80 anos de tradição em cuidados auditivos. 
                Focada em proporcionar clareza sonora excepcional e conforto incomparável, 
                oferece soluções personalizadas para cada necessidade auditiva.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Processamento de som avançado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Redução inteligente de ruído</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Adaptação automática ao ambiente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Aplicativo intuitivo para controle</span>
                </div>
              </div>

              <div className="bg-gradient-card rounded-xl p-4">
                <h4 className="font-semibold text-primary mb-2">Modelos Disponíveis:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Beltone Achieve - Performance superior</div>
                  <div>• Beltone Amaze - Clareza natural</div>
                  <div>• Beltone Trust - Confiabilidade total</div>
                  <div>• Beltone Boost - Potência discreta</div>
                </div>
              </div>

              <Button className="btn-premium-secondary w-full group">
                Explore os Produtos Beltone
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* GN Hearing Group info */}
        <div className="mt-16 text-center">
          <Card className="card-premium max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">Grupo GN Hearing</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tanto a GN ReSound quanto a Beltone fazem parte do Grupo GN Hearing, 
                líder mundial em soluções auditivas inteligentes. Com mais de 150 anos 
                de experiência combinada, o grupo investe continuamente em pesquisa e 
                desenvolvimento para oferecer as tecnologias mais avançadas do mercado.
              </p>
              <div className="flex justify-center">
                <Button className="btn-premium text-primary-foreground">
                  Saiba Mais Sobre o Grupo GN
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Brands;