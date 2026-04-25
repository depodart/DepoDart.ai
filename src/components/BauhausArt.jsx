// BauhausArt.jsx — inline SVG geometric compositions in the brand palette.
// Kinds used across the landing page sections.
//
// Colors (literal — intentionally not Tailwind classes so SVG stays self-contained):
//   DARK   #110A07  (near-black brown)
//   ORANGE #D23B0C  (burnt orange, brand accent)
//   GOLD   #FFC409  (gold)
//   OFF    #FAF6EE  (cream, for light sections)
//
// All compositions render in a 64x64 viewBox (except `finalCta` which is 320x180).
// Scale via the `size` prop or CSS width/height on the consumer side.

const DARK = "#110A07";
const ORANGE = "#D23B0C";
const GOLD = "#FFC409";
const OFF = "#FAF6EE";

const Identify = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="24" stroke={OFF} strokeWidth="2" />
    <circle cx="32" cy="32" r="14" fill={ORANGE} />
    <circle cx="32" cy="32" r="5" fill={GOLD} />
    <line x1="32" y1="0" x2="32" y2="64" stroke={OFF} strokeWidth="1.5" strokeDasharray="3 4" />
    <line x1="0" y1="32" x2="64" y2="32" stroke={OFF} strokeWidth="1.5" strokeDasharray="3 4" />
  </svg>
);

const Decision = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="32,8 56,52 8,52" fill={ORANGE} stroke={OFF} strokeWidth="2" strokeLinejoin="round" />
    <rect x="14" y="40" width="6" height="14" fill={GOLD} stroke={OFF} strokeWidth="2" />
    <rect x="24" y="34" width="6" height="20" fill={OFF} stroke={OFF} strokeWidth="2" />
    <rect x="34" y="28" width="6" height="26" fill={GOLD} stroke={OFF} strokeWidth="2" />
    <rect x="44" y="22" width="6" height="32" fill={OFF} stroke={OFF} strokeWidth="2" />
  </svg>
);

const Insight = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="6" y="6" width="52" height="52" stroke={OFF} strokeWidth="2" />
    <rect x="14" y="14" width="36" height="36" fill={ORANGE} />
    <rect x="22" y="22" width="20" height="20" fill={GOLD} stroke={DARK} strokeWidth="2" />
    <circle cx="32" cy="32" r="4" fill={DARK} />
  </svg>
);

const Unified = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="22" cy="32" r="16" fill={ORANGE} fillOpacity="0.9" stroke={OFF} strokeWidth="2" />
    <circle cx="42" cy="32" r="16" fill={GOLD} fillOpacity="0.9" stroke={OFF} strokeWidth="2" />
    <circle cx="32" cy="20" r="10" fill={OFF} fillOpacity="0.9" stroke={DARK} strokeWidth="2" />
  </svg>
);

// How It Works — larger feel, same 64 viewBox for consistency
const Assemble = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="8" width="32" height="32" fill={OFF} stroke={OFF} strokeWidth="2" transform="rotate(-8 24 24)" />
    <rect x="18" y="18" width="32" height="32" fill={ORANGE} stroke={DARK} strokeWidth="2" transform="rotate(4 34 34)" />
    <rect x="28" y="14" width="26" height="26" fill={GOLD} stroke={DARK} strokeWidth="2" transform="rotate(-3 41 27)" />
  </svg>
);

const Model = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="4" fill={GOLD} stroke={DARK} strokeWidth="2" />
    <circle cx="48" cy="16" r="4" fill={GOLD} stroke={DARK} strokeWidth="2" />
    <circle cx="32" cy="32" r="5" fill={ORANGE} stroke={DARK} strokeWidth="2" />
    <circle cx="16" cy="48" r="4" fill={OFF} stroke={DARK} strokeWidth="2" />
    <circle cx="48" cy="48" r="4" fill={OFF} stroke={DARK} strokeWidth="2" />
    <line x1="16" y1="16" x2="32" y2="32" stroke={OFF} strokeWidth="1.5" />
    <line x1="48" y1="16" x2="32" y2="32" stroke={OFF} strokeWidth="1.5" />
    <line x1="16" y1="48" x2="32" y2="32" stroke={OFF} strokeWidth="1.5" />
    <line x1="48" y1="48" x2="32" y2="32" stroke={OFF} strokeWidth="1.5" />
    <line x1="16" y1="16" x2="48" y2="16" stroke={OFF} strokeWidth="1.5" strokeDasharray="2 3" />
    <line x1="16" y1="48" x2="48" y2="48" stroke={OFF} strokeWidth="1.5" strokeDasharray="2 3" />
  </svg>
);

const Target = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="26" stroke={OFF} strokeWidth="2" />
    <circle cx="32" cy="32" r="18" stroke={ORANGE} strokeWidth="2" />
    <circle cx="32" cy="32" r="10" fill={ORANGE} />
    <circle cx="32" cy="32" r="4" fill={GOLD} />
    <line x1="32" y1="4" x2="32" y2="16" stroke={OFF} strokeWidth="2" />
    <line x1="32" y1="48" x2="32" y2="60" stroke={OFF} strokeWidth="2" />
    <line x1="4" y1="32" x2="16" y2="32" stroke={OFF} strokeWidth="2" />
    <line x1="48" y1="32" x2="60" y2="32" stroke={OFF} strokeWidth="2" />
  </svg>
);

const Deliver = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="8" fill={ORANGE} stroke={OFF} strokeWidth="2" />
    <path d="M32 20 L32 6 M28 10 L32 6 L36 10" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M44 32 L58 32 M54 28 L58 32 L54 36" stroke={OFF} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 44 L32 58 M28 54 L32 58 L36 54" stroke={OFF} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 32 L6 32 M10 28 L6 32 L10 36" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Personas — abstract geometric "avatars"
const PersonaLeader = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="8" width="48" height="48" fill={ORANGE} stroke={OFF} strokeWidth="2" />
    <circle cx="32" cy="26" r="10" fill={GOLD} stroke={DARK} strokeWidth="2" />
    <path d="M14 54 Q32 38 50 54" stroke={DARK} strokeWidth="2.5" fill="none" />
    <rect x="4" y="4" width="8" height="8" fill={GOLD} stroke={DARK} strokeWidth="2" />
  </svg>
);

const PersonaGeologist = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="26" fill={OFF} stroke={DARK} strokeWidth="2" />
    <polygon points="32,14 44,36 20,36" fill={ORANGE} stroke={DARK} strokeWidth="2" strokeLinejoin="round" />
    <polygon points="22,40 30,54 14,54" fill={GOLD} stroke={DARK} strokeWidth="2" strokeLinejoin="round" />
    <polygon points="40,42 48,54 32,54" fill={GOLD} stroke={DARK} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const PersonaInvestor = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="4" width="56" height="56" fill={GOLD} stroke={DARK} strokeWidth="2" />
    <path d="M10 48 L22 36 L32 42 L46 24 L54 30" stroke={DARK} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="46" cy="24" r="4" fill={ORANGE} stroke={DARK} strokeWidth="2" />
    <circle cx="22" cy="36" r="3" fill={DARK} />
    <rect x="48" y="8" width="8" height="8" fill={DARK} />
  </svg>
);

// Final CTA — wide decorative composition
const FinalCtaArt = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Large orange circle, left */}
    <circle cx="40" cy="140" r="70" fill={ORANGE} fillOpacity="0.25" />
    {/* Large gold square, right */}
    <rect x="220" y="20" width="110" height="110" fill={GOLD} fillOpacity="0.18" transform="rotate(8 275 75)" />
    {/* Triangle, top-center */}
    <polygon points="160,10 210,80 110,80" fill={ORANGE} fillOpacity="0.18" />
    {/* Thin orange line */}
    <line x1="0" y1="100" x2="320" y2="100" stroke={ORANGE} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 6" />
    {/* Small gold dot */}
    <circle cx="280" cy="160" r="10" fill={GOLD} fillOpacity="0.6" />
    <circle cx="280" cy="160" r="4" fill={ORANGE} />
    {/* Little orange square */}
    <rect x="100" y="120" width="14" height="14" fill={ORANGE} fillOpacity="0.5" transform="rotate(25 107 127)" />
  </svg>
);

const REGISTRY = {
  identify: Identify,
  decision: Decision,
  insight: Insight,
  unified: Unified,
  assemble: Assemble,
  model: Model,
  target: Target,
  deliver: Deliver,
  "persona-leader": PersonaLeader,
  "persona-geologist": PersonaGeologist,
  "persona-investor": PersonaInvestor,
  finalCta: FinalCtaArt,
};

const BauhausArt = ({ kind, size = 64, className = "" }) => {
  const Component = REGISTRY[kind];
  if (!Component) return null;
  const style = kind === "finalCta"
    ? { width: "100%", height: "auto" }
    : { width: size, height: size };
  return (
    <span className={`inline-block shrink-0 ${className}`} style={style}>
      <Component />
    </span>
  );
};

export default BauhausArt;
