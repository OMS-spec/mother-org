import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', paddingTop: 120 }}>
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: 260 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Our Mission</p>
            <p className="body-copy">
              Ministeria Occulta Mauroum exists to educate, assist, and preserve
              the culture of The Moorish Science Temple of America — for members and the public alike.
            </p>
          </div>
          <div style={{ maxWidth: 260, textAlign: 'right' }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Est. 2026</p>
            <p className="body-copy" style={{ marginLeft: 'auto' }}>
              Charity, mutual assistance, employment, and cultural education —
              recorded and rendered for the Americas.
            </p>
          </div>
        </div>

        <div style={{ position: 'relative', marginTop: '4vh', display: 'flex', justifyContent: 'center' }}>
          <h1
            className="headline"
            style={{ position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)', zIndex: 1, whiteSpace: 'nowrap', color: '#000' }}
          >
            NOSCE TE IPSUM ET ALLAH
          </h1>
          <motion.div
            style={{ y, opacity, position: 'relative', zIndex: 2, width: '46vw', minWidth: 320, maxWidth: 620 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/assets/persona-hero.jpg"
              alt="Editorial campaign portrait"
              style={{
                width: '100%',
                WebkitMaskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 78%, transparent 100%)',
              }}
            />
          </motion.div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '6vh' }}>
          <p className="eyebrow">Fall / Winter 2026</p>
          <p className="body-copy" style={{ maxWidth: 300, textAlign: 'right' }}>
            A season devoted to unity, obedience to law, and the preservation of
            Moorish science and culture across the Americas.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
          <Link to="/shop" className="text-link">Shop →</Link>
          <Link to="/services" className="text-link">Book a Service →</Link>
        </div>
      </div>
    </section>
  )
}
