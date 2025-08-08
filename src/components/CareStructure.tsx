import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Ear, Armchair, MapPin, Stethoscope } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import img1 from '@/assets/mulher-aparelho-auditivo.jpg';
import img2 from '@/assets/jovem-festa-enzo-q.jpg';
import img3 from '@/assets/casal-restaurante-omnia.jpg';
import img4 from '@/assets/aparelhos-pessoas-ao-redor.jpg';
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
      { src: img1, alt: 'Clínica Auditus em Belém - avaliação auditiva', caption: 'Belém — Ambientes modernos e confortáveis' },
      { src: img2, alt: 'Paciente em Belém utilizando aparelho auditivo', caption: 'Belém — Tecnologia que transforma rotinas' },
      { src: img3, alt: 'Casal em restaurante de Belém conversando com clareza', caption: 'Belém — Conforto para momentos especiais' },
      { src: img4, alt: 'Equipamentos de ponta na unidade de Belém', caption: 'Belém — Equipamentos de ponta' },
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
      { src: img1, alt: 'Clínica Auditus em Fortaleza - avaliação auditiva', caption: 'Fortaleza — Ambientes modernos e confortáveis' },
      { src: img2, alt: 'Paciente em Fortaleza utilizando aparelho auditivo', caption: 'Fortaleza — Tecnologia que transforma rotinas' },
      { src: img3, alt: 'Casal em restaurante de Fortaleza conversando com clareza', caption: 'Fortaleza — Conforto para momentos especiais' },
      { src: img4, alt: 'Equipamentos de ponta na unidade de Fortaleza', caption: 'Fortaleza — Equipamentos de ponta' },
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
                      <figure className="rounded-2xl overflow-hidden card-premium h-full border border-border bg-muted p-2">
                        <div className="w-full">
                          <AspectRatio ratio={3/4} className="w-full max-w-sm md:max-w-md mx-auto rounded-xl overflow-hidden">
                            <img
                              src={g.src}
                              alt={g.alt}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                        </div>
                        {g.caption && (
                          <figcaption className="p-4 text-sm text-muted-foreground">
                            {g.caption}
                          </figcaption>
                        )}
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Imagem anterior" />
                <CarouselNext aria-label="Próxima imagem" />
              </Carousel>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareStructure;
