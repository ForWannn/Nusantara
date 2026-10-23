import { cn } from "@/lib/cn";
import { getProvinsiGeo } from "@/lib/peta";

type ProvinceGlyphProps = {
  slug: string;
  className?: string;
  pathClassName?: string;
};

export function ProvinceGlyph({
  slug,
  className,
  pathClassName,
}: ProvinceGlyphProps) {
  const geo = getProvinsiGeo(slug);

  if (!geo) return null;

  const [x, y, width, height] = geo.bbox;
  const pad = Math.max(4, Math.min(width, height) * 0.08);

  return (
    <svg
      viewBox={`${x - pad} ${y - pad} ${width + pad * 2} ${height + pad * 2}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d={geo.d}
        strokeWidth={1.2}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className={cn("fill-sand stroke-clay/60", pathClassName)}
      />
    </svg>
  );
}
