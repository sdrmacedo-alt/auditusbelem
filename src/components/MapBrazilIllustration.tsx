import React, { useEffect, useMemo, useRef, useState } from 'react';

// Mapa do Brasil ilustrado com marcações arrastáveis
// Mantém o layout do card e usa tokens do design

type Location = {
  city: string;
  state: string;
  address: string;
  lat: number;
  lon: number;
};

const locations: Location[] = [
  { city: 'Belém', state: 'PA', address: 'Trav. Dom Romualdo de Seixas, 832 — Umarizal — CEP 66050-110', lat: -1.4558, lon: -48.4902 },
  { city: 'Fortaleza', state: 'CE', address: 'Rua Monsenhor Bruno, 1153 — Ed. Scopa — Aldeota — CEP 60140-190', lat: -3.7319, lon: -38.5267 },
  { city: 'São Luís', state: 'MA', address: 'Av. Prof. Carlos Cunha — Medical Jaracaty, Sala 813 — CEP 65076-908', lat: -2.5387, lon: -44.2825 },
];

// Extremos aproximados do Brasil para projeção equiretangular
const BOUNDS = { latMin: -33.75, latMax: 5.3, lonMin: -73.99, lonMax: -34.79 };

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

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

type NormalizedPos = { nx: number; ny: number; adjusted: boolean };

const MapBrazilIllustration: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { w: cw, h: ch } = useElementSize(containerRef);
  const [intrinsic, setIntrinsic] = useState({ w: 1024, h: 1024 }); // fallback

  // posições normalizadas por cidade [0..1] dentro da caixa renderizada
  const [normPositions, setNormPositions] = useState<Record<string, NormalizedPos>>({});

  // dimensões intrínsecas do SVG
  const handleImgLoad = () => {
    if (!imgRef.current) return;
    const nw = imgRef.current.naturalWidth || 1024;
    const nh = imgRef.current.naturalHeight || 1024;
    setIntrinsic({ w: nw, h: nh });
  };

  // caixa do SVG com object-contain
  const renderedBox = useMemo(() => {
    const scale = Math.min(cw / intrinsic.w, ch / intrinsic.h || 1) || 1;
    const dispW = intrinsic.w * scale;
    const dispH = intrinsic.h * scale;
    const offX = (cw - dispW) / 2;
    const offY = (ch - dispH) / 2;
    return { dispW, dispH, offX, offY };
  }, [cw, ch, intrinsic]);

  // projeção lat/lon -> px
  const project = (lat: number, lon: number) => {
    const nx = (lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin);
    const ny = (BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin);
    const x = renderedBox.offX + nx * renderedBox.dispW;
    const y = renderedBox.offY + ny * renderedBox.dispH;
    return { x, y, nx, ny };
  };

  // Inicializa posições normalizadas com base na projeção quando possível
  useEffect(() => {
    if (cw === 0 || ch === 0 || renderedBox.dispW === 0 || renderedBox.dispH === 0) return;
    setNormPositions((prev) => {
      const next = { ...prev } as Record<string, NormalizedPos>;
      for (const loc of locations) {
        const key = loc.city;
        if (!next[key] || !next[key].adjusted) {
          const { x, y } = project(loc.lat, loc.lon);
          const nx = clamp((x - renderedBox.offX) / renderedBox.dispW, 0, 1);
          const ny = clamp((y - renderedBox.offY) / renderedBox.dispH, 0, 1);
          next[key] = { nx, ny, adjusted: false };
        }
      }
      return next;
    });
  }, [cw, ch, renderedBox.dispW, renderedBox.dispH, renderedBox.offX, renderedBox.offY]);

  const toPixels = (nx: number, ny: number) => {
    const x = renderedBox.offX + nx * renderedBox.dispW;
    const y = renderedBox.offY + ny * renderedBox.dispH;
    return { x, y };
  };

  const startDrag = (city: string) => (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);

    const move = (ev: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const px = ev.clientX - rect.left;
      const py = ev.clientY - rect.top;
      // clamp na caixa do mapa
      const x = clamp(px, renderedBox.offX, renderedBox.offX + renderedBox.dispW);
      const y = clamp(py, renderedBox.offY, renderedBox.offY + renderedBox.dispH);
      const nx = (x - renderedBox.offX) / renderedBox.dispW;
      const ny = (y - renderedBox.offY) / renderedBox.dispH;
      setNormPositions((prev) => ({
        ...prev,
        [city]: { nx, ny, adjusted: true },
      }));
    };

    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
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

        {/* Marcadores arrastáveis (sem legendas) */}
        {locations.map((loc) => {
          const saved = normPositions[loc.city];
          const coords = saved ? toPixels(saved.nx, saved.ny) : toPixels(0.5, 0.5);
          const visible = cw > 0 && ch > 0;
          return (
            <div
              key={loc.city}
              className="absolute select-none cursor-grab active:cursor-grabbing touch-none"
              style={{ left: coords.x, top: coords.y, transform: 'translate(-50%, -50%)', visibility: visible ? 'visible' : 'hidden' }}
              aria-label={`AUDITUS ${loc.city} — ${loc.state}`}
              onPointerDown={startDrag(loc.city)}
            >
              <span className="block w-3 h-3 rounded-full bg-secondary ring-2 ring-secondary/30 shadow-md" />
            </div>
          );
        })}
      </div>

      {/* Overlay sutil para integrar ao card */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />

      <figcaption className="sr-only">
        Arraste os pontos para ajustar Belém (PA), Fortaleza (CE) e São Luís (MA).
      </figcaption>
    </figure>
  );
};

export default MapBrazilIllustration;
