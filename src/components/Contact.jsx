import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const errors = []
    if (!formData.name.trim()) errors.push('İsim alanı zorunludur')
    if (!formData.email.trim()) errors.push('E-posta alanı zorunludur')
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push('Geçerli bir e-posta adresi giriniz')
    if (!formData.subject.trim()) errors.push('Konu alanı zorunludur')
    if (!formData.message.trim()) errors.push('Mesaj alanı zorunludur')
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    
    if (errors.length > 0) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: errors.join('\n')
      })
      return
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }))
      }, 3000)
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Bir hata oluştu. Lütfen tekrar deneyiniz.'
      })
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>İletişim</h1>
          <p>Sorularınız için bize ulaşın. Size yardımcı olmaktan mutluluk duyarız.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="form-map-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Bize Ulaşın</h2>
            {formStatus.error && (
              <div className="form-error">{formStatus.error}</div>
            )}
            {formStatus.isSubmitted && (
              <div className="form-success">Mesajınız başarıyla gönderildi!</div>
            )}
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                disabled={formStatus.isSubmitting}
              />
              <label htmlFor="name" className={formData.name ? 'active' : ''}>Adınız</label>
            </div>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                disabled={formStatus.isSubmitting}
              />
              <label htmlFor="email" className={formData.email ? 'active' : ''}>E-posta</label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                value={formData.subject}
                onChange={handleInputChange}
                disabled={formStatus.isSubmitting}
              />
              <label htmlFor="subject" className={formData.subject ? 'active' : ''}>Konu</label>
            </div>
            <div className="form-group">
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                value={formData.message}
                onChange={handleInputChange}
                disabled={formStatus.isSubmitting}
              ></textarea>
              <label htmlFor="message" className={formData.message ? 'active' : ''}>Mesajınız</label>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </form>
          <div className="map-section">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443928507323!2d28.97786081571668!3d41.03717897929828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1652327777872!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Organico Location"
              ></iframe>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <div>
                  <h3>Telefon</h3>
                  <p>+90 (212) 555 0123</p>
                </div>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faClock} className="contact-icon" />
                <div>
                  <h3>Çalışma Saatleri</h3>
                  <p>Pazartesi - Cumartesi</p>
                  <p>09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact