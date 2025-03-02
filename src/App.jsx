import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faTruck, faStar, faShoppingCart, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import { CartProvider, useCart } from './context/CartContext'

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { cartCount, toggleCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const query = searchQuery.toLowerCase()
    if (query.trim() === '') {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const products = [
      { id: 1, name: 'Organik Badem', category: 'Kuruyemiş & Tohumlar' },
      { id: 2, name: 'Kuru Kayısı', category: 'Kuru Meyveler' },
      { id: 3, name: 'Ham Bal', category: 'Doğal Tatlandırıcılar' },
      { id: 4, name: 'Karışık Kuruyemiş', category: 'Organik Atıştırmalıklar' },
      { id: 5, name: 'Organik Chia Tohumu', category: 'Kuruyemiş & Tohumlar'},
      { id: 6, name: 'Hindistan Cevizi Yağı', category: 'Organik Yağlar' }
    ]

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )

    setSearchResults(filtered)
    setShowResults(true)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h1>Organico</h1></Link>
      </div>
      <button className="mobile-nav-toggle" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`nav-links ${isNavOpen ? 'active' : ''}}`}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Ürün ara..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              handleSearch(e)
            }}
            onFocus={() => setShowResults(true)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search-icon"
            onClick={handleSearch}
          />
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(product => (
                <Link
                  key={product.id}
                  to={`/shop?product=${product.name}`}
                  onClick={() => {
                    setShowResults(false)
                    setSearchQuery('')
                  }}
                >
                  <div className="search-result-item">
                    <span>{product.name}</span>
                    <span className="category">{product.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/" onClick={() => setIsNavOpen(false)}>Ana Sayfa</Link>
        <Link to="/shop" onClick={() => setIsNavOpen(false)}>Mağaza</Link>
        <Link to="/about" onClick={() => setIsNavOpen(false)}>Hakkımızda</Link>
        <Link to="/contact" onClick={() => setIsNavOpen(false)}>İletişim</Link>
        <div className="cart-icon-container" onClick={(e) => { e.preventDefault(); toggleCart(); setIsNavOpen(false); }}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Cart />

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Organico</h3>
                <p>Premium organik ürünler için güvenilir adresiniz. Sağlıklı bir yaşam için en kaliteli organik ürünleri sunmaya inanıyoruz.</p>
              </div>
              <div className="footer-section">
                <h3>Hızlı Bağlantılar</h3>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/shop">Mağaza</Link>
                <Link to="/contact">İletişim</Link>
              </div>
              <div className="footer-section">
                <h3>Müşteri Hizmetleri</h3>
                <Link to="/shipping">Kargo Bilgileri</Link>
                <Link to="/returns">İade Politikası</Link>
                <Link to="/faq">SSS</Link>
                <Link to="/terms">Şartlar ve Koşullar</Link>
              </div>
              <div className="footer-section">
                <h3>Bizi Takip Edin</h3>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Organico. Tüm hakları saklıdır.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
