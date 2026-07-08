import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeUp } from './Reveal.jsx'
import { archiveCollections } from '../data/content.js'

export default function ArchivePreview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-18%'])

  return (
    <section className="section" ref={ref} style={{ overflow: 'hidden' }}>
      <div className="container">
        <FadeUp>
          <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 8 }}>Records</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Previous Chapters</h2>
        </FadeUp>
      </div>

      <motion.div style={{ x, display: 'flex', gap: 40, marginTop: '8vh', paddingLeft: '6vw' }}>
        {archiveCollections.map((c) => (
          <div key={c.id} className="archive-card" style={{ minWidth: 260, flexShrink: 0 }}>
             <img src={c.image} alt={c.title} style={{ width: 260, height: 340, objectFit: 'cover' }} />
            <p className="eyebrow" style={{ marginTop: 16 }}>{c.title}</p>
            <p className="body-copy" style={{ marginTop: 4 }}>{c.season} — {c.year}</p>
          </div>
        ))}
      </motion.div>

      <div className="container" style={{ textAlign: 'center', marginTop: '6vh' }}>
        <Link to="/archive" className="text-link">View Full Archive →</Link>
      </div>
    </section>
  )
}
