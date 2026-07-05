import { motion } from 'framer-motion'

export function FadeUp({ children, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function ImageReveal({ src, alt, style, imgStyle }) {
  return (
    <motion.div
      style={{ overflow: 'hidden', ...style }}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', ...imgStyle }}
      />
    </motion.div>
  )
}
