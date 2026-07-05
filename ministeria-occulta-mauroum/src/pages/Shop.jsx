import { Link } from 'react-router-dom'
import { FadeUp, ImageReveal } from '../components/Reveal.jsx'
import { products } from '../data/content.js'

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
            Proceeds support charitable works, mutual assistance, and the
            preservation of Moorish science and culture across the Americas.
          </p>
        </FadeUp>

        <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6vw 4vw',
            marginTop: '10vh',
          }}
        >
          {products.map((p, i) => (
            <Link key={p.id} to={`/shop/${p.id}`} style={{ display: 'block' }}>
              <ImageReveal src={p.image} alt={p.title} style={{ height: '52vh' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                <div>
                  <p className="eyebrow">{p.title}</p>
                  <p className="body-copy">{p.category}</p>
                </div>
                <p className="eyebrow">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
