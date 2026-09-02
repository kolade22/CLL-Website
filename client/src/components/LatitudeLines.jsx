export default function LatitudeLines({ className = "", drift = false }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className={drift ? "lat-drift" : undefined}>
        <path
          d="M-80 560 C 340 500 780 640 1520 520"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.16"
        />
        <path
          d="M-80 680 C 400 630 860 760 1520 640"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.12"
        />
        <path
          d="M-80 800 C 360 760 900 880 1520 760"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.09"
        />
        <circle cx="360" cy="563" r="3.5" fill="currentColor" fillOpacity="0.4" />
        <circle cx="1085" cy="652" r="3.5" fill="currentColor" fillOpacity="0.3" />
      </g>
      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.22">
        <path d="M172 240 h16 M180 232 v16" />
        <path d="M512 168 h16 M520 160 v16" />
        <path d="M972 252 h16 M980 244 v16" />
        <path d="M1232 142 h16 M1240 134 v16" />
        <path d="M292 404 h16 M300 396 v16" />
        <path d="M700 340 h16 M708 332 v16" />
      </g>
    </svg>
  );
}
