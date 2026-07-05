import { Link } from 'react-router-dom'
import { FadeUp, ImageReveal } from './Reveal.jsx'
import { products } from '../data/content.js'

export default function CollectionShowcase() {
  const featured = products[0]
  const gallery = products.slice(1, 5)

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 40, alignItems: 'start' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 16 }}>
            <ImageReveal src={featured.image} alt={featured.title} style={{ height: '70vh' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {gallery.map((p) => (
                <ImageReveal key={p.id} src={p.image} alt={p.title} style={{ height: 'calc((70vh - 48px) / 4)' }} />
              ))}
            </div>
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
            <Link to="/shop" className="text-link">View All →</Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
