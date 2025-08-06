import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselImages = [
    {
      src: "/src/assets/mulher-aparelho-auditivo.jpg",
      alt: "Mulher usando aparelho auditivo ReSound Nexia",
      title: "ReSound Nexia"
    },
    {
      src: "/src/assets/casal-restaurante-omnia.jpg",
      alt: "Casal conversando em restaurante com ReSound Omnia",
      title: "ReSound Omnia"
    },
    {
      src: "/src/assets/aparelhos-pessoas-ao-redor.jpg",
      alt: "Aparelhos auditivos ReSound Key com fotografias de pessoas ao redor",
      title: "ReSound Key"
    },
    {
      src: "/src/assets/jovem-festa-enzo-q.jpg",
      alt: "Jovem numa festa usando aparelho auditivo ReSound Enzo Q",
      title: "ReSound Enzo Q"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
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
              <p className="subheading-premium max-w-2xl text-white text-left">Na AUDITUS, cada jornada auditiva é única. Não vemos apenas uma perda auditiva, mas uma pessoa com suas histórias e necessidades. Nossa equipe é treinada para ouvir com empatia, oferecer suporte personalizado</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-premium text-primary-foreground group">
                Teste Auditivo Gratuito
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-zinc-800" />
              </Button>
              <Button className="btn-premium-secondary group">
                <Play className="mr-2 w-5 h-5" />
                Conheça Nossa História
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-white">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">7000+</div>
                <div className="text-white">Clientes Satisfeitos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Right content - Image Carousel */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl bg-zinc-700"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-elegant">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    {carouselImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative overflow-hidden rounded-2xl">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-80 object-cover animate-fade-in rounded-2xl transition-all duration-500 hover-scale" 
                          />
                          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg backdrop-blur-sm">
                            <span className="text-sm font-medium">{image.title}</span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none shadow-lg" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none shadow-lg" />
                </Carousel>
                
                {/* Carousel indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-primary w-6' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
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