import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, toggleCart, cartTotal } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="cart-overlay">
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Alışveriş Sepeti</h2>
          <button className="close-cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <p>Sepetiniz boş</p>
              <button className="continue-shopping" onClick={toggleCart}>
                Alışverişe Devam Et
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price.toFixed(2)} TL</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row total">
              <span>Toplam</span>
              <span>{cartTotal.toFixed(2)} TL</span>
            </div>
            <button className="checkout-btn">
              Ödemeye Geç
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart