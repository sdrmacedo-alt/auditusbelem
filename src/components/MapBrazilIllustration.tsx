import React, { useEffect, useMemo, useRef, useState } from 'react';

// Mapa do Brasil ilustrado com marcações precisas usando projeção simples
// Mantém o layout do card e design tokens do projeto

type Location = {
  city: string;
  state: string;
  address: string;
  lat: number;
  lon: number;
};

const locations: Location[] = [
  {
    city: 'Belém',
    state: 'PA',
    address: 'Trav. Dom Romualdo de Seixas, 832 — Umarizal — CEP 66050-110',
    lat: -1.4558,
    lon: -48.4902,
  },
  {
    city: 'Fortaleza',
    state: 'CE',
    address: 'Rua Monsenhor Bruno, 1153 — Ed. Scopa — Aldeota — CEP 60140-190',
    lat: -3.7319,
    lon: -38.5267,
  },
  {
    city: 'São Luís',
    state: 'MA',
    address: 'Av. Prof. Carlos Cunha — Medical Jaracaty, Sala 813 — CEP 65076-908',
    lat: -2.5387,
    lon: -44.2825,
  },
];

// Extremos aproximados do Brasil para uma projeção equiretangular simples
const BOUNDS = {
  latMin: -33.75,
  latMax: 5.3,
  lonMin: -73.99,
  lonMax: -34.79,
};

const useElementSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setSize({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
};

const MapBrazilIllustration: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { w: cw, h: ch } = useElementSize(containerRef);
  const [intrinsic, setIntrinsic] = useState({ w: 1024, h: 1024 }); // fallback

  // Obtem dimensões intrínsecas do SVG após carregamento
  const handleImgLoad = () => {
    if (!imgRef.current) return;
    const nw = (imgRef.current.naturalWidth || 1024);
    const nh = (imgRef.current.naturalHeight || 1024);
    setIntrinsic({ w: nw, h: nh });
  };

  // Calcula caixa exibida do SVG com object-contain
  const renderedBox = useMemo(() => {
    const scale = Math.min(cw / intrinsic.w, ch / intrinsic.h || 1) || 1;
    const dispW = intrinsic.w * scale;
    const dispH = intrinsic.h * scale;
    const offX = (cw - dispW) / 2;
    const offY = (ch - dispH) / 2;
    return { dispW, dispH, offX, offY };
  }, [cw, ch, intrinsic]);

  // Projeta lat/lon -> coordenadas (px) dentro da imagem renderizada
  const project = (lat: number, lon: number) => {
    const nx = (lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin);
    const ny = (BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin);
    const x = renderedBox.offX + nx * renderedBox.dispW;
    const y = renderedBox.offY + ny * renderedBox.dispH;
    return { x, y };
  };

  return (
    <figure className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
      <div ref={containerRef} className="absolute inset-0">
        {/* Silhueta do mapa */}
        <img
          ref={imgRef}
          src={new URL('@/assets/brazil-outline.svg', import.meta.url).toString()}
          alt="Mapa do Brasil estilizado com marcações das unidades AUDITUS"
          className="absolute inset-0 w-full h-full object-contain opacity-90"
          loading="lazy"
          decoding="async"
          onLoad={handleImgLoad}
        />

        {/* Marcadores calculados via projeção */}
        {locations.map((loc) => {
          const { x, y } = project(loc.lat, loc.lon);
          const visible = cw > 0 && ch > 0;
          return (
            <div
              key={loc.city}
              className="absolute select-none transition-transform"
              style={{ left: x, top: y, transform: 'translate(-50%, -50%)', visibility: visible ? 'visible' : 'hidden' }}
              aria-label={`AUDITUS ${loc.city} — ${loc.state}`}
            >
              <span className="block w-3 h-3 rounded-full bg-secondary ring-2 ring-secondary/30 shadow-md" />
              <div className="mt-2 px-2 py-1 rounded-md bg-background/90 border border-border shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur text-xs text-primary whitespace-nowrap">
                <strong className="font-semibold">AUDITUS {loc.city}</strong> — <span className="text-muted-foreground">{loc.state}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overlay sutil para integrar ao card */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />

      <figcaption className="sr-only">
        Unidades da AUDITUS em Belém (PA), Fortaleza (CE) e São Luís (MA).
      </figcaption>
    </figure>
  );
};

export default MapBrazilIllustration;
