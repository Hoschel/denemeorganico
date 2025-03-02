import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faTruck, faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Home() {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const allProducts = [
      {
        id: 5,
        name: 'Organik Chia Tohumu',
        price: 89.90,
        category: 'nuts-seeds',
        image: '/images/products/chia.jpg',
      },
      {
        id: 6,
        name: 'Organik Hindistan Cevizi Yağı',
        price: 159.90,
        category: 'organic-oils',
        image: '/images/products/coconut-oil.jpg',
      },
      {
        id: 1,
        name: 'Organik Kuru Üzüm',
        price: 49.90,
        category: 'dried-fruits',
        image: '/images/products/raisins.jpg'
      },
      {
        id: 2,
        name: 'Çiğ Badem',
        price: 129.90,
        category: 'nuts-seeds',
        image: '/images/products/almonds.jpg'
      },
      {
        id: 3,
        name: 'Organik Bal',
        price: 189.90,
        category: 'natural-sweeteners',
        image: '/images/products/honey.jpg'
      },
      {
        id: 4,
        name: 'Granola Karışımı',
        price: 79.90,
        category: 'organic-snacks',
        image: '/images/products/granola.jpg'
      }
    ]

    // Get 5 random products
    const shuffled = [...allProducts].sort(() => 0.3 - Math.random())
    setFeaturedProducts(shuffled.slice(0, 3))
  }, [])

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category}`)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Doğal ve Organik Ürünlerin Adresi</h1>
          <p>En kaliteli organik ürünleri keşfedin. Sağlıklı yaşam için doğal seçimler.</p>
          <button className="shop-now" onClick={() => navigate('/shop')}>Alışverişe Başla</button>
        </div>
        <div className="hero-image"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faLeaf} className="feature-icon" />
          <h3>%100 Organik</h3>
          <p>Tüm ürünlerimiz sertifikalı organik çiftliklerden tedarik edilmektedir.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faTruck} className="feature-icon" />
          <h3>Ücretsiz Kargo</h3>
          <p>150 TL ve üzeri alışverişlerinizde kargo ücretsiz.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faStar} className="feature-icon" />
          <h3>Premium Kalite</h3>
          <p>En yüksek kalite standartlarında ürünler.</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Öne Çıkan Ürünler</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price.toFixed(2)} TL</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  <FontAwesomeIcon icon={faShoppingCart} /> Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="shop-categories">
        <h2>Kategoriler</h2>
        <div className="categories-grid">
          <div className="category-card dried-fruits" onClick={() => handleCategoryClick('dried-fruits')}>
            <h3>Kuru Meyveler</h3>
          </div>
          <div className="category-card organic-snacks" onClick={() => handleCategoryClick('organic-snacks')}>
            <h3>Organik Atıştırmalıklar</h3>
          </div>
          <div className="category-card natural-sweeteners" onClick={() => handleCategoryClick('natural-sweeteners')}>
            <h3>Doğal Tatlandırıcılar</h3>
          </div>
          <div className="category-card nuts-seeds" onClick={() => handleCategoryClick('nuts-seeds')}>
            <h3>Kuruyemiş & Tohumlar</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home