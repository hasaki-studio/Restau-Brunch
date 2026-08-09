import { cn } from "@/lib/utils";

interface MapViewProps {
  className?: string;
  initialCenter?: unknown;
  initialZoom?: number;
  onMapReady?: (map: unknown) => void;
}

export function MapView({ className }: MapViewProps) {
  const address = encodeURIComponent(
    "12 Rue des Fleurs, 75006 Paris, France"
  );

  return (
    <div className={cn("w-full h-[500px] overflow-hidden", className)}>
      <iframe
        title="Pivoine - 12 Rue des Fleurs, 75006 Paris"
        src={`https://www.google.com/maps?q=${address}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}