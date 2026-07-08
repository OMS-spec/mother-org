 import { useState, useEffect } from 'react'
 import { Link } from 'react-router-dom'
 import { motion } from 'framer-motion'

 export default function Nav() {
   const [scrolled, setScrolled] = useState(false)
+  const [menuOpen, setMenuOpen] = useState(false)
   useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 40)
     window.addEventListener('scroll', onScroll)
     return () => window.removeEventListener('scroll', onScroll)
   }, [])

   return (
+    <>
     <motion.header
       initial={{ y: -40, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
       style={{
         position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
         padding: '28px 6vw',
         background: scrolled ? 'rgba(245,245,245,0.85)' : 'transparent',
         backdropFilter: scrolled ? 'blur(8px)' : 'none',
         transition: 'background 0.6s ease',
         borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
       }}
     >
       <Link to="/" className="eyebrow" style={{ fontWeight: 500, letterSpacing: '0.16em' }}>
         MINISTERIA · OCCULTA · MAUROUM
       </Link>
-      <nav style={{ display: 'flex', gap: 40 }}>
+      <nav className="nav-desktop-links" style={{ display: 'flex', gap: 40 }}>
         <Link to="/about" className="text-link">About</Link>
         <Link to="/services" className="text-link">Services</Link>
         <Link to="/shop" className="text-link">Shop</Link>
         <Link to="/archive" className="text-link">Archive</Link>
       </nav>
-      <Link to="/services" className="text-link">
+      <Link to="/services" className="text-link nav-desktop-links">
         Enter →
       </Link>
+      <button
+        className="nav-mobile-toggle"
+        onClick={() => setMenuOpen((v) => !v)}
+        style={{ flexDirection: 'column', gap: 5, padding: 4 }}
+        aria-label="Toggle menu"
+      >
+        <span style={{ width: 24, height: 1, background: 'var(--text)' }} />
+        <span style={{ width: 24, height: 1, background: 'var(--text)' }} />
+      </button>
     </motion.header>
+
+    {menuOpen && (
+      <div className="nav-mobile-menu">
+        <Link to="/about" className="text-link" onClick={() => setMenuOpen(false)}>About</Link>
+        <Link to="/services" className="text-link" onClick={() => setMenuOpen(false)}>Services</Link>
+        <Link to="/shop" className="text-link" onClick={() => setMenuOpen(false)}>Shop</Link>
+        <Link to="/archive" className="text-link" onClick={() => setMenuOpen(false)}>Archive</Link>
+      </div>
+    )}
+    </>
   )
 }
