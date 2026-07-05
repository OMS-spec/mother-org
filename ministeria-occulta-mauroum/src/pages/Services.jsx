import { Link } from 'react-router-dom'
import { FadeUp } from '../components/Reveal.jsx'
import { services } from '../data/content.js'

export default function Services() {
  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container">
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Services</p>
          <h1 className="section-title" style={{ maxWidth: 760 }}>
            Education, Assistance &amp; Ceremony
          </h1>
          <p className="body-copy" style={{ marginTop: 24, maxWidth: 480 }}>
            Book a session below. Sessions are open to members and, where noted,
            to the general public.
          </p>
        </FadeUp>

        <div style={{ marginTop: '10vh' }}>
          {services.map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.05}>
              <Link
                to={`/booking/${s.id}`}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 140px 140px 100px',
                  alignItems: 'center', padding: '32px 0',
                  borderTop: '1px solid var(--border)', gap: 24,
                }}
              >
                <div>
                  <p className="eyebrow" style={{ fontSize: 16, textTransform: 'none', letterSpacing: '0.02em', marginBottom: 8 }}>
                    {s.title}
                  </p>
                  <p className="body-copy" style={{ maxWidth: 460 }}>{s.description}</p>
                </div>
                <p className="eyebrow">{s.duration}</p>
                <p className="eyebrow">{s.price === 0 ? 'No Charge' : `$${s.price}`}</p>
                <p className="text-link" style={{ justifySelf: 'end' }}>Book →</p>
              </Link>
            </FadeUp>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </main>
  )
}
