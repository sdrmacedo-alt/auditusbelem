import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Ear, Armchair, MapPin, Stethoscope } from 'lucide-react';
import img1 from '@/assets/mulher-aparelho-auditivo.jpg';
import img2 from '@/assets/jovem-festa-enzo-q.jpg';
import img3 from '@/assets/casal-restaurante-omnia.jpg';
import img4 from '@/assets/aparelhos-pessoas-ao-redor.jpg';

const features = [
  { icon: Ear, title: 'Cabines acústicas certificadas' },
  { icon: Armchair, title: 'Salas climatizadas e espaços de espera acolhedores' },
  { icon: MapPin, title: 'Localização acessível e com fácil estacionamento' },
  { icon: Stethoscope, title: 'Atendimento personalizado por fonoaudiólogos especializados' },
];

const gallery = [
  { src: img1, alt: 'Avaliação auditiva em clínica Auditus', caption: 'Ambientes modernos e confortáveis' },
  { src: img2, alt: 'Paciente feliz utilizando aparelho auditivo', caption: 'Tecnologia que transforma rotinas' },
  { src: img3, alt: 'Casal em restaurante conversando com clareza', caption: 'Conforto para momentos especiais' },
  { src: img4, alt: 'Aparelhos auditivos e atendimento humanizado', caption: 'Equipamentos de ponta' },
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

        {/* Galeria horizontal */}
        <div className="relative">
          <Carousel className="w-full" aria-label="Galeria da clínica Auditus">
            <CarouselContent>
              {gallery.map((g, i) => (
                <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3 px-2">
                  <figure className="rounded-xl overflow-hidden card-premium h-full">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-56 md:h-64 object-cover"
                    />
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
        </div>
      </div>
    </section>
  );
};

export default CareStructure;
