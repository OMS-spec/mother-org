import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ position: 'relative', marginTop: '10vh' }}>
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>FROM COLUMBUS TO THE AMERICAS — UNITY, CULTURE, ASSISTANCE</span>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', background: '#0b0b0b', color: '#f5f5f5', padding: '10vh 6vw', overflow: 'hidden' }}>
        <img
          src="/assets/footer-left.jpg"
          alt=""
          style={{ position: 'absolute', left: -40, bottom: -40, width: 260, opacity: 0.9, filter: 'grayscale(1) contrast(1.1)' }}
        />
        <img
          src="/assets/footer-right.jpg"
          alt=""
          style={{ position: 'absolute', right: -40, bottom: -40, width: 260, opacity: 0.9, filter: 'grayscale(1) contrast(1.1)' }}
        />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: '#aaa', marginBottom: 20 }}>Ministeria Occulta Mauroum</p>
          <h3 style={{ fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', margin: 0 }}>
            Claim Your Place →
          </h3>
        </div>

        <div
          style={{
            display: 'flex', justifyContent: 'center', gap: '10vw', marginTop: '10vh',
            position: 'relative', zIndex: 2, flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: '#aaa', marginBottom: 16 }}>Visit</p>
            <p className="body-copy" style={{ color: '#ccc' }}>Columbus, Ohio</p>
            <p className="body-copy" style={{ color: '#ccc' }}>United States</p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: '#aaa', marginBottom: 16 }}>Explore</p>
            <p className="body-copy" style={{ color: '#ccc' }}><Link to="/about">About</Link></p>
            <p className="body-copy" style={{ color: '#ccc' }}><Link to="/services">Services</Link></p>
            <p className="body-copy" style={{ color: '#ccc' }}><Link to="/shop">Shop</Link></p>
            <p className="body-copy" style={{ color: '#ccc' }}><Link to="/archive">Archive</Link></p>
          </div>
             <div>
            <p className="eyebrow" style={{ color: '#aaa', marginBottom: 16 }}>Follow</p>
            <p className="body-copy" style={{ color: '#ccc' }}>
              <a href="https://www.instagram.com/moorishoccultministries" target="_blank" rel="noreferrer">Instagram</a>
            </p>
            <p className="body-copy" style={{ color: '#ccc' }}>
              <a href="https://www.youtube.com/@MoorishOccultMinistries" target="_blank" rel="noreferrer">YouTube</a>
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: '#aaa', marginBottom: 16 }}>Contact</p>
            <p className="body-copy" style={{ color: '#ccc' }}>
              <a href="mailto:moorishoccultministries@gmail.com">moorishoccultministries@gmail.com</a>
            </p>
          </div>
        </div>

        <p className="body-copy" style={{ textAlign: 'center', color: '#777', marginTop: '10vh', maxWidth: 'none' }}>
          © 2026 Ministeria Occulta Mauroum. A nonprofit religious auxiliary. ALL RIGHTS PRESERVED AND RESERVED
        </p>
      </div>
    </footer>
  )
}
