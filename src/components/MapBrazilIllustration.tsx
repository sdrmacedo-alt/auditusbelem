import React from 'react';

// Simple stylized Brazil map using an SVG outline + positioned markers
// Uses design tokens via Tailwind utility classes

const locations = [
  {
    city: 'Belém',
    state: 'PA',
    address: 'Trav. Dom Romualdo de Seixas, 832 — Umarizal — CEP 66050-110',
    // Approximate position percentages over the SVG outline
    pos: { top: '26%', left: '48%' },
  },
  {
    city: 'Fortaleza',
    state: 'CE',
    address: 'Rua Monsenhor Bruno, 1153 — Ed. Scopa — Aldeota — CEP 60140-190',
    pos: { top: '30%', left: '64%' },
  },
  {
    city: 'São Luís',
    state: 'MA',
    address: 'Av. Prof. Carlos Cunha — Medical Jaracaty, Sala 813 — CEP 65076-908',
    pos: { top: '24%', left: '55%' },
  },
];

const MapBrazilIllustration: React.FC = () => {
  return (
    <figure className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
      {/* Background/overlay for depth matching the design */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/0" />

      {/* Map silhouette */}
      <img
        src={new URL('@/assets/brazil-outline.svg', import.meta.url).toString()}
        alt="Mapa do Brasil estilizado com marcações das unidades AUDITUS"
        className="absolute inset-0 w-full h-full object-contain opacity-90"
        loading="lazy"
        decoding="async"
      />

      {/* Markers */}
      {locations.map((loc) => (
        <div
          key={loc.city}
          className="absolute select-none"
          style={{ top: loc.pos.top, left: loc.pos.left, transform: 'translate(-50%, -50%)' }}
          aria-label={`AUDITUS ${loc.city} — ${loc.state}`}
        >
          <span className="block w-3 h-3 rounded-full bg-secondary ring-2 ring-secondary/30 shadow-md" />
          <div className="mt-2 px-2 py-1 rounded-md bg-background/90 border border-border shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur text-xs text-primary whitespace-nowrap">
            <strong className="font-semibold">AUDITUS {loc.city}</strong> — <span className="text-muted-foreground">{loc.state}</span>
          </div>
        </div>
      ))}

      <figcaption className="sr-only">
        Unidades da AUDITUS em Belém (PA), Fortaleza (CE) e São Luís (MA).
      </figcaption>
    </figure>
  );
};

export default MapBrazilIllustration;
