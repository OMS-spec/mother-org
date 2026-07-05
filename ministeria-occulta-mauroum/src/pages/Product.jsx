import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { FadeUp, ImageReveal } from '../components/Reveal.jsx'
import { products } from '../data/content.js'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id) || products[0]
  const [added, setAdded] = useState(false)

  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6vw', alignItems: 'start' }}>
        <ImageReveal src={product.image} alt={product.title} style={{ height: '80vh' }} />

        <FadeUp>
          <p className="eyebrow">{product.category}</p>
          <h1 className="section-title" style={{ marginTop: 16, fontSize: 'clamp(32px, 5vw, 56px)' }}>
            {product.title}
          </h1>
          <p className="eyebrow" style={{ marginTop: 24 }}>${product.price}.00 USD</p>
          <p className="body-copy" style={{ marginTop: 32, maxWidth: 420 }}>{product.description}</p>

          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p className="eyebrow" style={{ color: 'var(--text-secondary)' }}>Edition: {product.edition}</p>
            <p className="eyebrow" style={{ color: 'var(--text-secondary)' }}>Season: {product.season}</p>
          </div>

          <button
            onClick={() => setAdded(true)}
            className="text-link"
            style={{ marginTop: 48, fontSize: 13 }}
          >
            {added ? 'Added to Bag ✓' : 'Add to Bag →'}
          </button>

          <div style={{ marginTop: 24 }}>
            <Link to="/shop" className="text-link">Back to Shop</Link>
          </div>
        </FadeUp>
      </div>
    </main>
  )
}
