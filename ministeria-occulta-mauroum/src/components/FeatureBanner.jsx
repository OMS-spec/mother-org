import { motion } from 'framer-motion'
import { FadeUp } from './Reveal.jsx'

const filmstrip = Array.from({ length: 10 }, (_, i) => `/assets/strip-${(i % 5) + 1}.jpg`)

export default function FeatureBanner() {
  return (
    <section className="section" style={{ overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute', top: '50%', left: 0, width: '100%',
            transform: 'translateY(-50%)', overflow: 'hidden', opacity: 0.5, zIndex: 0,
          }}
        >
          <motion.div
            style={{ display: 'flex', gap: 12 }}
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {[...filmstrip, ...filmstrip].map((src, i) => (
              <img key={i} src={src} alt="" style={{ height: 90, width: 64, objectFit: 'cover' }} />
            ))}
          </motion.div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <h2 className="headline" style={{ fontSize: 'clamp(40px, 8vw, 96px)' }}>
              UNCOVER A NEW<br />VISION OF SERVICE<br />WITH MINISTERIA OCCULTA MAUROUM
            </h2>
          </FadeUp>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4vh' }}>
            <img
              src="/assets/feature-center.jpg"
              alt="Central editorial portrait"
              style={{ width: 'min(360px, 40vw)', height: 'min(560px, 62vh)', objectFit: 'cover' }}
            />
          </div>
          <FadeUp delay={0.2}>
            <p className="body-copy" style={{ margin: '4vh auto 0', maxWidth: 420 }}>
              Ministeria Occulta Mauroum redefines mutual assistance and invites members and the
              public to explore Moorish science with a fresh perspective.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
