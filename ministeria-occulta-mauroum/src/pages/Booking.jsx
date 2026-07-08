import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FadeUp } from '../components/Reveal.jsx'
import { services } from '../data/content.js'

export default function Booking() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id) ?? services[0]

  const [form, setForm] = useState({ name: '', email: '', date: '', notes: '' })
  const [slots, setSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState('')
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  useEffect(() => {
    if (!form.date) return
    setLoadingSlots(true)
    setSelectedSlot('')
    fetch(`/api/cal-slots?eventTypeId=${service.calEventTypeId}&date=${form.date}`)
      .then((r) => r.json())
      .then((data) => {
  let daySlots = data.slots ?? data.data ?? []
  if (!Array.isArray(daySlots)) {
    daySlots = Object.values(daySlots)[0] ?? []
  }
  setSlots(daySlots)
})

      .catch(() => setError('Could not load available times.'))
      .finally(() => setLoadingSlots(false))
  }, [form.date, service.calEventTypeId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedSlot) {
      setError('Please select a time slot.')
      return
    }
    setError('')
    try {
      const r = await fetch('/api/cal-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventTypeId: service.calEventTypeId,
          start: selectedSlot,
          name: form.name,
          email: form.email,
          notes: form.notes,
        }),
      })
      if (!r.ok) throw new Error('Booking failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong booking your session. Please try again.')
    }
  }

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
              Thank you, {form.name}. A member of Ministeria Occulta Mauroum will confirm your session by email shortly.
            </p>
            <Link to="/services" className="text-link" style={{ marginTop: 32, display: 'inline-block' }}>
              Back to Services
            </Link>
          </FadeUp>
        ) : (
          <form style={{ marginTop: '8vh', display: 'flex', flexDirection: 'column', gap: 28 }} onSubmit={handleSubmit}>
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

            {form.date && (
              <div>
                <p className="eyebrow" style={{ marginBottom: 10 }}>Available Times</p>
                {loadingSlots && <p className="body-copy">Loading times…</p>}
                {!loadingSlots && slots.length === 0 && (
                  <p className="body-copy">No times available on this date.</p>
                )}
                {!loadingSlots && slots.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                    {slots.map((s) => {
                      const time = s.time ?? s.start ?? s
                      const label = new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedSlot(time)}
                          className="text-link"
                          style={{
                            padding: '8px 14px',
                            border: `1px solid ${selectedSlot === time ? 'var(--text)' : 'var(--border)'}`,
                          }}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Notes</p>
              <input style={inputStyle} value={form.notes} onChange={update('notes')} />
            </div>

            {error && <p className="body-copy" style={{ color: 'var(--error, tomato)' }}>{error}</p>}

            <button type="submit" className="text-link" style={{ marginTop: 20, alignSelf: 'flex-start' }}>
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </main>
  )
}
