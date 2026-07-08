import { Link } from 'react-router-dom'
import { FadeUp, ImageReveal } from '../components/Reveal.jsx'
import { products } from '../data/content.js'

const SHOP_LIVE = false // flip to true when ready to launch

export default function Shop() {
  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container">
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Shop</p>
          <h1 className="section-title" style={{ maxWidth: 720 }}>
            Publications, Regalia &amp; Emblems
          </h1>
          <p className="body-copy" style={{ marginTop: 24, maxWidth: 480 }}>
            Proceeds support charitable works, mutual assistance, and the preservation of Moorish
            science and culture across the Americas.
          </p>
        </FadeUp>

        {!SHOP_LIVE && (
          <FadeUp delay={0.15}>
            <div
              style={{
                marginTop: '14vh',
                marginBottom: '14vh',
                textAlign: 'center',
                padding: '8vh 4vw',
                border: '1px solid var(--border)',
              }}
            >
              <p className="eyebrow" style={{ marginBottom: 12 }}>Coming Soon</p>
              <p className="body-copy" style={{ maxWidth: 420, margin: '0 auto' }}>
                The shop is currently being prepared. Check back soon for publications, regalia,
                and emblems.
              </p>
            </div>
          </FadeUp>
        )}

        {SHOP_LIVE && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '6vw 4vw',
              marginTop: '10vh',
            }}
          >
            {products.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.05}>
                <Link to={`/shop/${p.id}`} style={{ display: 'block' }}>
                  <ImageReveal src={p.image} alt={p.title} style={{ height: '52vh' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                    <div>
                      <p className="eyebrow">{p.title}</p>
                      <p className="body-copy">{p.category}</p>
                    </div>
                    <p className="eyebrow">
                      {p.priceOptions
                        ? `From $${Math.min(...p.priceOptions.map((o) => o.price))}`
                        : `$${p.price}`}
                    </p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
