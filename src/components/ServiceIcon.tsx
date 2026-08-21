import {
  SprayCan,
  Home,
  ShieldCheck,
  Layers,
  Gauge,
  Wind,
  Warehouse,
  Hammer,
  ThermometerSun,
  Sun,
  Flame,
  Wrench,
  Building2,
  Eraser,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  SprayCan,
  Home,
  ShieldCheck,
  Layers,
  Gauge,
  Wind,
  Warehouse,
  Hammer,
  ThermometerSun,
  Sun,
  Flame,
  Wrench,
  Building2,
  Eraser,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? SprayCan;
  return <Icon className={className} />;
}
