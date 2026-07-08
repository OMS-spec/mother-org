// Repeating SVG glyph tile: hairline alchemical/planetary symbols + infinity mark,
// rendered as vector paths (not emoji font glyphs) for a consistent, austere line weight.

const PLANETS = [
  // Sun
  { paths: ['M32 30 a8 8 0 1 0 0.01 0'], dot: true },
  // Moon (crescent)
  { paths: ['M38 18 a14 14 0 1 0 0 24 a11 11 0 0 1 0 -24'] },
  // Mercury (circle + horns + cross)
  { paths: ['M32 26 a7 7 0 1 0 0.01 0', 'M26 12 a6 6 0 0 0 12 0', 'M32 33 v10', 'M27 43 h10'] },
  // Venus (circle + cross)
  { paths: ['M32 16 a9 9 0 1 0 0.01 0', 'M32 25 v18', 'M25 38 h14'] },
  // Mars (circle + arrow)
  { paths: ['M28 22 a9 9 0 1 0 0.01 0', 'M34 16 l10 -10', 'M36 6 h8 v8'] },
  // Jupiter
  { paths: ['M22 14 h10 a6 6 0 0 1 0 12 h-10', 'M38 10 v30'] },
  // Saturn
  { paths: ['M24 10 h10', 'M29 10 v22 a8 8 0 0 0 8 8', 'M40 34 l-10 10'] },
]

export default function GlyphTile({ index = 0, width = 64, height = 90 }) {
  const symbol = PLANETS[index % PLANETS.length]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 90"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* thin circle seal border */}
      ircle cx="32" cy="66" r="16" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5" /

      {/* infinity mark, top */}
      <path
        d="M18 20 c-4 -6 -10 -6 -10 0 s6 6 10 0 c4 -6 10 -6 10 0 s-6 6 -10 0"
        transform="translate(14 -2)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* planetary glyph, centered in seal */}
      <g transform="translate(0 46) scale(0.55)" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {symbol.paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  )
}
