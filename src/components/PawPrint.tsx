import type { CSSProperties } from "react";

interface PawPrintProps {
  className?: string;
  style?: CSSProperties;
  color?: string;
  size?: number | string;
  rotate?: number;
  title?: string;
}

/**
 * PawPrint — decorative SVG paw used for flourishes and section dividers.
 * Purely decorative by default; pass `title` to make it semantic.
 */
export function PawPrint({
  className = "",
  style,
  color = "currentColor",
  size = 48,
  rotate = 0,
  title,
}: PawPrintProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {title ? <title>{title}</title> : null}
      <g fill={color}>
        <ellipse cx="28" cy="34" rx="8.5" ry="11" />
        <ellipse cx="50" cy="24" rx="9"   ry="12" />
        <ellipse cx="72" cy="34" rx="8.5" ry="11" />
        <ellipse cx="84" cy="58" rx="7"   ry="9"  />
        <ellipse cx="16" cy="58" rx="7"   ry="9"  />
        <path d="M50 48
                 c 14 0 24 10 24 22
                 c 0  9 -7 17 -16 17
                 c -3  0 -5 -1 -8 -1
                 c -3  0 -5  1 -8  1
                 c -9  0 -16 -8 -16 -17
                 c 0 -12 10 -22 24 -22 z" />
      </g>
    </svg>
  );
}

/**
 * PawTrail — a scattered row of paws, used as a section divider.
 */
export function PawTrail({
  className = "",
  color = "var(--color-teal-deep)",
  count = 6,
  opacity = 0.55,
}: { className?: string; color?: string; count?: number; opacity?: number }) {
  const paws = Array.from({ length: count });
  return (
    <div
      className={`flex items-center justify-center gap-6 ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      {paws.map((_, i) => (
        <PawPrint
          key={i}
          size={i % 2 === 0 ? 26 : 20}
          color={color}
          rotate={i % 2 === 0 ? -14 : 18}
          style={{ transform: `translateY(${i % 2 === 0 ? -4 : 6}px) rotate(${i % 2 === 0 ? -14 : 18}deg)` }}
        />
      ))}
    </div>
  );
}
