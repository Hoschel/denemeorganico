import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEarth, faHandshake } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <h1>Hakkımızda</h1>
          <p>2015 yılından beri, doğal ve organik ürünleri müşterilerimizle buluşturuyoruz. Misyonumuz, sağlıklı yaşamı destekleyen en kaliteli organik ürünleri ulaşılabilir kılmak.</p>
        </div>
      </section>

      <section className="values">
        <h2>Değerlerimiz</h2>
        <div className="values-grid">
          <div className="value-card">
            <FontAwesomeIcon icon={faHeart} className="value-icon" />
            <h3>Sağlık</h3>
            <p>Müşterilerimizin sağlığını her şeyin üstünde tutuyoruz. Tüm ürünlerimiz sağlık standartlarına uygun şekilde üretiliyor.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faEarth} className="value-icon" />
            <h3>Sürdürülebilirlik</h3>
            <p>Çevreye duyarlı üretim ve paketleme yöntemleri kullanıyor, doğayı korumayı görev ediniyoruz.</p>
          </div>
          <div className="value-card">
            <FontAwesomeIcon icon={faHandshake} className="value-icon" />
            <h3>Güven</h3>
            <p>Müşterilerimizle kurduğumuz güven ilişkisi en değerli varlığımızdır. Şeffaflık ve dürüstlük ilkelerimizden taviz vermiyoruz.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Ekibimiz</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/images/team/member1.jpg" alt="Takım Üyesi" />
            <h3>Ahmet Yılmaz</h3>
            <p>Kurucu & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team/member2.jpg" alt="Takım Üyesi" />
            <h3>Ayşe Kaya</h3>
            <p>Ürün Müdürü</p>
          </div>
          <div className="team-member">
            <img src="/images/team/member3.jpg" alt="Takım Üyesi" />
            <h3>Mehmet Demir</h3>
            <p>Kalite Kontrol Uzmanı</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About