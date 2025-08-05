import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-light rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 border border-primary-lighter rounded-full animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in bg-zinc-500">
            <div className="space-y-4">
              <h1 className="heading-premium">
                Descubra um
                <br />
                <span className="text-secondary">Novo Mundo</span>
                <br />
                de Sons
              </h1>
              <p className="subheading-premium max-w-2xl">
                No AUDITUS, oferecemos soluções auditivas premium das marcas 
                GN ReSound e Beltone. Tecnologia avançada para uma audição natural 
                e uma vida plena.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-premium text-primary-foreground group">
                Teste Auditivo Gratuito
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-premium-secondary group">
                <Play className="mr-2 w-5 h-5" />
                Conheça Nossa História
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl bg-zinc-700"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-elegant">
                <img src="/lovable-uploads/01d510ef-f009-4aca-9995-d63fede3bf58.png" alt="AUDITUS - Soluções Auditivas Premium" className="w-full h-auto animate-float" />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-8 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-card animate-bounce">
              <div className="text-sm font-semibold">Premium Quality</div>
            </div>
            <div className="absolute bottom-8 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-card animate-bounce" style={{
            animationDelay: '1s'
          }}>
              <div className="text-sm font-semibold">GN Hearing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;