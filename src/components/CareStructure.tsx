import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Ear, Armchair, MapPin, Stethoscope } from 'lucide-react';

import Autoplay from 'embla-carousel-autoplay';

const features = [
  { icon: Ear, title: 'Cabines acústicas certificadas' },
  { icon: Armchair, title: 'Salas climatizadas e espaços de espera acolhedores' },
  { icon: MapPin, title: 'Localização acessível e com fácil estacionamento' },
  { icon: Stethoscope, title: 'Atendimento personalizado por fonoaudiólogos especializados' },
];

const galleries = [
  {
    city: 'Belém',
    ariaLabel: 'Galeria da clínica Auditus em Belém',
    items: [
      { src: '/lovable-uploads/ba66c886-b78e-461e-af85-254204a176e1.png', alt: 'Sala de espera com mural na clínica Auditus em Belém', caption: 'Belém — Sala de espera com mural artístico' },
      { src: '/lovable-uploads/1c2425ea-0f36-440d-810c-e718d7289cc1.png', alt: 'Área de atendimento com poltronas e balcão vermelho na clínica Auditus em Belém', caption: 'Belém — Área de atendimento' },
      { src: '/lovable-uploads/9fa71ccf-a057-4255-a6ea-23f763a4c9a3.png', alt: 'Consultório da clínica Auditus em Belém', caption: 'Belém — Consultório' },
      { src: '/lovable-uploads/578d0a34-9f54-4521-bfb5-b366fcdccdfa.png', alt: 'Sala técnica da clínica Auditus em Belém', caption: 'Belém — Sala técnica' },
    ],
  },
  {
    city: 'São Luís',
    ariaLabel: 'Galeria da clínica Auditus em São Luís',
    items: [
      { src: '/lovable-uploads/c712f627-947c-464a-aecb-03fae870d662.png', alt: 'Sala de espera da clínica Auditus em São Luís', caption: 'São Luís — Sala de espera' },
      { src: '/lovable-uploads/76a7684f-609b-403d-a152-4ee99ffeb229.png', alt: 'Consultório da clínica Auditus em São Luís', caption: 'São Luís — Consultório' },
      { src: '/lovable-uploads/80524d40-ef31-4605-a99a-9bc0d5d954be.png', alt: 'Cabine acústica da clínica Auditus em São Luís', caption: 'São Luís — Cabine acústica' },
      { src: '/lovable-uploads/c1eda176-1d30-4873-9f7e-7c04df56faf5.png', alt: 'Cabine acústica aberta da clínica Auditus em São Luís', caption: 'São Luís — Cabine acústica' },
    ],
  },
  {
    city: 'Fortaleza',
    ariaLabel: 'Galeria da clínica Auditus em Fortaleza',
    items: [
      { src: '/lovable-uploads/cf4b956a-5c37-4ae8-be41-f688dcdba1d2.png', alt: 'Consultório da clínica Auditus em Fortaleza', caption: 'Fortaleza — Consultório moderno e confortável' },
      { src: '/lovable-uploads/32c21275-3f19-40eb-9bde-79fb2f56d4b5.png', alt: 'Recepção da clínica Auditus em Fortaleza', caption: 'Fortaleza — Recepção acolhedora' },
      { src: '/lovable-uploads/d7c192e4-5a07-47e4-a7a3-a354b77876ec.png', alt: 'Sala de convivência da clínica Auditus em Fortaleza', caption: 'Fortaleza — Sala de convivência e espera' },
      { src: '/lovable-uploads/654bca10-a61a-4a4c-9329-d9eeda2b453e.png', alt: 'Sala de espera da clínica Auditus em Fortaleza', caption: 'Fortaleza — Sala de espera com poltronas' },
    ],
  },
];

const CareStructure = () => {
  return (
    <section id="estrutura" aria-labelledby="estrutura-title" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 id="estrutura-title" className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Estrutura de Atendimento <span className="text-secondary">Auditus</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Nossas clínicas foram pensadas para acolher, orientar e oferecer conforto em cada etapa da sua jornada auditiva. Com ambientes modernos, salas equipadas com tecnologia de ponta e localização estratégica em Belém, São Luís e Fortaleza, garantimos um atendimento de excelência.
          </p>
        </div>

        {/* Grid de destaques da estrutura */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((item, idx) => (
            <Card key={idx} className="card-premium h-full">
              <div className="flex items-start gap-4 p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-primary leading-snug">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Galerias por unidade */}
        <div className="space-y-8">
          {galleries.map((gal, idx) => (
            <section key={idx} aria-labelledby={`galeria-${idx}`} className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 id={`galeria-${idx}`} className="text-xl font-semibold text-primary">
                  {gal.city}
                </h3>
              </div>

              <Carousel className="w-full" aria-label={gal.ariaLabel} opts={{ loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}>
                <CarouselContent>
                  {gal.items.map((g, i) => (
                    <CarouselItem key={i} className="basis-full px-2">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={g.src}
                          alt={g.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-80 object-cover animate-fade-in rounded-2xl transition-all duration-500 hover-scale"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg backdrop-blur-sm">
                          <span className="text-sm font-medium">{gal.city}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Imagem anterior" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none shadow-lg" />
                <CarouselNext aria-label="Próxima imagem" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 border-none shadow-lg" />
              </Carousel>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareStructure;
