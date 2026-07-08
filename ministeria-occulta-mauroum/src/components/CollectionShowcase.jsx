import { Link } from 'react-router-dom'
import { FadeUp, ImageReveal } from './Reveal.jsx'
import { products } from '../data/content.js'
import { SHOP_LIVE } from '../data/config.js'

export default function CollectionShowcase() {
  const featured = products[0]
  const gallery = products.slice(1, 5)

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 40, alignItems: 'start' }}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 140px',
                gap: 16,
                filter: SHOP_LIVE ? 'none' : 'grayscale(1) opacity(0.5)',
                transition: 'filter 0.6s ease',
              }}
            >
              <ImageReveal src={featured.image} alt={featured.title} style={{ height: '70vh' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {gallery.map((p) => (
                  <ImageReveal key={p.id} src={p.image} alt={p.title} style={{ height: 'calc((70vh - 48px) / 4)' }} />
                ))}
              </div>
            </div>

            {!SHOP_LIVE && (
              <div
                style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  pointerEvents: 'none',
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    fontSize: '1.4rem', letterSpacing: '0.2em',
                    background: 'var(--bg)', padding: '12px 28px',
                    border: '1px solid var(--border)',
                  }}
                >
                  Collection Arriving Soon
                </p>
              </div>
            )}
          </div>

          <FadeUp>
            <p className="eyebrow">Collection</p>
            <p className="body-copy" style={{ marginBottom: 24 }}>{featured.category}</p>
            <p className="eyebrow">Edition</p>
            <p className="body-copy" style={{ marginBottom: 24 }}>{featured.edition}</p>
            <p className="eyebrow">Season</p>
            <p className="body-copy" style={{ marginBottom: 24 }}>{featured.season}</p>
            <p className="eyebrow">Items</p>
            <p className="body-copy" style={{ marginBottom: 24 }}>01–04</p>
            <p className="body-copy" style={{ marginBottom: 32 }}>{featured.description}</p>
            {SHOP_LIVE ? (
              <Link to="/shop" className="text-link">View All →</Link>
            ) : (
              <p className="text-link" style={{ opacity: 0.5, cursor: 'default' }}>Opening Soon</p>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
