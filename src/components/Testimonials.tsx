import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Maria José', age: 71, city: 'Fortaleza',
    text: 'Voltei a ouvir a voz dos meus netos. Me emocionei na primeira semana de uso. A atenção da equipe da Auditus foi impecável.',
    initials: 'MJ'
  },
  {
    name: 'Sr. Raimundo', age: 66, city: 'Belém',
    text: 'Achei que nunca me adaptaria. Mas hoje não fico sem meu aparelho. Gratidão pela paciência e profissionalismo!',
    initials: 'SR'
  },
  {
    name: 'Silvana', age: 58, city: 'São Luís',
    text: 'Foi mais do que um atendimento — foi um cuidado que mudou minha rotina. Recomendo a Auditus de olhos fechados.',
    initials: 'S'
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 id="depoimentos-title" className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nada nos motiva mais do que ver nossos pacientes voltando a ouvir — e viver — com mais plenitude.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="card-premium h-full">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="font-semibold text-primary">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-base md:text-lg font-semibold text-primary">
                      {t.name}, {t.age} anos
                    </div>
                    <div className="text-sm text-muted-foreground">{t.city}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">“{t.text}”</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
