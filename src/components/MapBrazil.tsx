import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Relax types to ensure compatibility with project TS setup
const LeafletMapContainer = MapContainer as any;
const LeafletTileLayer = TileLayer as any;
const LeafletMarker = Marker as any;
const LeafletPopup = Popup as any;

// Custom DivIcon using design tokens via Tailwind classes
const createAuditusIcon = () =>
  L.divIcon({
    className: 'auditus-divicon',
    html:
      '<span class="block w-3 h-3 rounded-full bg-secondary ring-2 ring-secondary/30 shadow-md"></span>',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

const icon = createAuditusIcon();

const locations = [
  {
    city: 'Belém',
    state: 'PA',
    coords: [-1.4558, -48.4902] as [number, number],
    address: 'Trav. Dom Romualdo de Seixas, 832 — Umarizal — CEP 66050-110',
  },
  {
    city: 'Fortaleza',
    state: 'CE',
    coords: [-3.7319, -38.5267] as [number, number],
    address: 'Rua Monsenhor Bruno, 1153 — Ed. Scopa — Aldeota — CEP 60140-190',
  },
  {
    city: 'São Luís',
    state: 'MA',
    coords: [-2.5387, -44.2825] as [number, number],
    address: 'Av. Prof. Carlos Cunha — Medical Jaracaty, Sala 813 — CEP 65076-908',
  },
];

const MapBrazil: React.FC = () => {
  // Centered to show North/Northeast nicely
  const center: [number, number] = [-4.5, -48.5];

  return (
    <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
      <LeafletMapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        className="absolute inset-0"
        attributionControl={true}
      >
        <LeafletTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {locations.map((loc) => (
          <LeafletMarker key={loc.city} position={loc.coords} icon={icon}>
            <LeafletPopup>
              <div className="space-y-1">
                <p className="font-semibold text-primary">
                  AUDITUS {loc.city} — {loc.state}
                </p>
                <p className="text-sm text-muted-foreground">{loc.address}</p>
              </div>
            </LeafletPopup>
          </LeafletMarker>
        ))}
      </LeafletMapContainer>
      {/* Subtle overlay to match card style */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default MapBrazil;
