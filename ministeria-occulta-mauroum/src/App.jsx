import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import MagneticCursor from './components/MagneticCursor.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Services from './pages/Services.jsx'
import Booking from './pages/Booking.jsx'
import Archive from './pages/Archive.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <>
      <div className="grain" />
      <MagneticCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
