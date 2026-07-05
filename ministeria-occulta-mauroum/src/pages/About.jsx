import { FadeUp, ImageReveal } from '../components/Reveal.jsx'

export default function About() {
  return (
    <main style={{ paddingTop: 160 }}>
      <div className="container">
        <FadeUp>
          <p className="eyebrow" style={{ marginBottom: 16 }}>About</p>
          <h1 className="headline" style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}>
            MINISTERIA<br />OCCULTA<br />MAUROUM
          </h1>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6vw', marginTop: '12vh', alignItems: 'start' }}>
          <ImageReveal src="/assets/about-01.jpg" alt="Temple gathering" style={{ height: '70vh' }} />
          <FadeUp delay={0.15}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Purpose</p>
            <p className="body-copy" style={{ maxWidth: 480, fontSize: 14 }}>
              Ministeria Occulta Mauroum is available for the common, nonprofit
              purposes of educating and rendering assistance to fellow members,
              providing an accessible source of information pertaining to
              Moorish science, religion, and culture to members and the public,
              and recording and maintaining the culture of Moorish Science of
              America in the Americas.
            </p>
            <p className="body-copy" style={{ maxWidth: 480, fontSize: 14, marginTop: 24 }}>
              As a legally organized religious corporation, Ministeria Occulta
              Mauroum and its auxiliary bodies are built on human needs. To
              this end, we dispense charity and provide for the mutual
              assistance of members in times of distress, aid in the
              improvement of health, encourage the ownership of better homes,
              find employment for members, and teach the fundamental
              principles of obedience to law, respect and loyalty to
              government, tolerance, and unity.
            </p>
          </FadeUp>
        </div>

        <div style={{ marginTop: '14vh', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {[
            ['Education', 'Accessible information on Moorish science, religion, and culture.'],
            ['Assistance', 'Charity and mutual aid for members in times of distress.'],
            ['Employment', 'Direct support finding work and stable housing.'],
            ['Unity', 'Fostering obedience to law, tolerance, and loyalty to government.'],
          ].map(([title, copy], i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>{title}</p>
              <p className="body-copy">{copy}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  )
}
