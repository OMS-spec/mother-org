// Repeating SVG glyph tile: infinity sign paired with an astrological glyph.
// Replaces the photographic filmstrip with a lightweight, theme-matched
// vector pattern (no image assets required).

const GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']
// Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces

export default function GlyphTile({ index = 0, width = 64, height = 90 }) {
  const glyph = GLYPHS[index % GLYPHS.length]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 90"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <text x="32" y="36" textAnchor="middle" dominantBaseline="middle" fontSize="30" fill="currentColor">
        ∞
      </text>
      <text x="32" y="64" textAnchor="middle" dominantBaseline="middle" fontSize="26" fill="currentColor">
        {glyph}
      </text>
    </svg>
  )
}
