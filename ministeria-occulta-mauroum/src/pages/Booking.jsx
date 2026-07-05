import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { FadeUp } from '../components/Reveal.jsx'
import { services } from '../data/content.js'

export default function Booking() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id) || services[0]
  const [form, setForm] = useState({ name: '', email: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid var(--border)', padding: '14px 0',
    fontSize: 14, fontFamily: 'var(--font)', color: 'var(--text)', outline: 'none',
  }

  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container" style={{ maxWidth: 640 }}>
        <FadeUp>
          <p className="eyebrow">Booking</p>
          <h1 className="section-title" style={{ marginTop: 16, fontSize: 'clamp(32px, 5vw, 56px)' }}>
            {service.title}
          </h1>
          <p className="body-copy" style={{ marginTop: 24 }}>{service.description}</p>
          <p className="eyebrow" style={{ marginTop: 24, color: 'var(--text-secondary)' }}>
            {service.duration} · {service.price === 0 ? 'No Charge' : `$${service.price}`}
          </p>
        </FadeUp>

        {submitted ? (
          <FadeUp>
            <p className="eyebrow" style={{ marginTop: '8vh' }}>Request Received</p>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Thank you, {form.name}. A member of Ministeria Occulta Mauroum will
              confirm your session by email shortly.
            </p>
            <Link to="/services" className="text-link" style={{ marginTop: 32, display: 'inline-block' }}>
              Back to Services
            </Link>
          </FadeUp>
        ) : (
          <form
            style={{ marginTop: '8vh', display: 'flex', flexDirection: 'column', gap: 28 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Full Name</p>
              <input required style={inputStyle} value={form.name} onChange={update('name')} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Email</p>
              <input required type="email" style={inputStyle} value={form.email} onChange={update('email')} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Preferred Date</p>
              <input required type="date" style={inputStyle} value={form.date} onChange={update('date')} />
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Notes</p>
              <input style={inputStyle} value={form.notes} onChange={update('notes')} />
            </div>
            <button type="submit" className="text-link" style={{ marginTop: 20, alignSelf: 'flex-start' }}>
              Confirm Booking →
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
