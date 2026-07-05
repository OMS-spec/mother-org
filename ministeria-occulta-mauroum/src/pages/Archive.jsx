import { FadeUp, ImageReveal } from '../components/Reveal.jsx'
import { archiveCollections } from '../data/content.js'

export default function Archive() {
  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container">
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Archive</p>
          <h1 className="section-title" style={{ maxWidth: 700 }}>
            A Record of Our Chapters
          </h1>
        </FadeUp>

        <div style={{ marginTop: '10vh', display: 'flex', flexDirection: 'column', gap: '10vh' }}>
          {archiveCollections.map((c, i) => (
            <FadeUp key={c.id} delay={i * 0.05}>
              <div
                style={{
                  display: 'grid', gridTemplateColumns: '240px 1fr', gap: 40,
                  alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '6vh',
                }}
              >
                <ImageReveal src={c.image} alt={c.title} style={{ height: 320 }} />
                <div>
                  <p className="eyebrow" style={{ color: 'var(--text-secondary)' }}>{c.season} — {c.year}</p>
                  <h2 className="section-title" style={{ marginTop: 16, fontSize: 'clamp(28px, 4vw, 48px)' }}>
                    {c.title}
                  </h2>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  )
}
