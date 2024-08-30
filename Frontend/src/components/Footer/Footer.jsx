import "./Footer.css"
const Footer = () => {
  return (
    <footer class="footer">
      <div class="subscribe-row">
        <div class="container">
          <div class="footer-row-wrapper">
            <div class="footer-subscribe-wrapper">
              <div class="footer-subscribe">
                <div class="footer-subscribe-top">
                  <h3 class="subscribe-title">
                  Yeni ürünler, satışlar ve daha fazlası hakkında bilgi için e-posta ile abone ol.
                  </h3>
                  <p class="subscribe-desc">
                  10$ üzerindeki ilk siparişinizde 50$ değerinde bir kupon e-postası göndereceğiz.


                  </p>
                </div>
                <div class="footer-subscribe-bottom">
                  <form>
                    <input
                      type="text"
                      placeholder="Enter your email address."
                    />
                    <button class="btn">Abone Olmak</button>
                  </form>
                  <p class="privacy-text">
                  Abone olarak{" "}
                    <a href="#">
                    Şartlar ve Koşullarımızı ve Gizlilik ve Çerez Politikamızı kabul etmiş olursunuz.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="footer-contact-wrapper">
              <div class="footer-contact-top">
                <h3 class="contact-title">
                Yardıma mı ihtiyacınız var? <br />
                  (+90) 123 456 78 90
                </h3>
                <p class="contact-desc">08:00 – 19:00 saatleri arasında hizmetinizdeyiz</p>
              </div>
              <div class="footer-contact-bottom">
                <div class="download-app">
                  <a href="#">
                    <img src="img/footer/app-store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="img/footer/google-play.png" alt="" />
                  </a>
                </div>
                <p class="privacy-text">
                  <strong>Alışveriş Uygulaması:</strong> Uygulamamızda Görüntüle özelliğimizi deneyin, kayıtları yönetin ve ödeme bilgilerini kaydedin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="widgets-row">
        <div class="container">
          <div class="footer-widgets">
            <div class="brand-info">
              <div class="footer-logo">
                <a href="index.html" class="logo">
                  LOGO
                </a>
              </div>
              <div class="footer-desc">
                <p>
                  {" "}
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis in termapol.
                </p>
              </div>
              <div class="footer-contact">
                <p>
                  <a href="tel:555 555 55 55">(+90) 1234 5678 90</a> –{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
            <div class="widget-nav-menu">
              <h4>Bilgi</h4>
              <ul class="menu-list">
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="#">İade Politikası</a>
                </li>
                <li>
                  <a href="#">Nakliye Politikası </a>
                </li>
                <li>
                  <a href="#">Stoksuz satış</a>
                </li>
              </ul>
            </div>
            <div class="widget-nav-menu">
              <h4>Hesap</h4>
              <ul class="menu-list">
                <li>
                  <a href="#">Tablo</a>
                </li>
                <li>
                  <a href="#">Siparişlerim</a>
                </li>
                <li>
                  <a href="#">İstek Listem</a>
                </li>
                <li>
                  <a href="#">Hesap detayları</a>
                </li>
                <li>
                  <a href="#">Siparişlerimi Takip Et</a>
                </li>
              </ul>
            </div>
            <div class="widget-nav-menu">
              <h4>Dükkân</h4>
              <ul class="menu-list">
                <li>
                  <a href="#">Bağlı</a>
                </li>
                <li>
                  <a href="#">En çok satanlar</a>
                </li>
                <li>
                  <a href="#">İskonto</a>
                </li>
                <li>
                  <a href="#">en son ürünler</a>
                </li>
                <li>
                  <a href="#">İndirimli Ürünler</a>
                </li>
              </ul>
            </div>
            <div class="widget-nav-menu">
              <h4>Kategori</h4>
              <ul class="menu-list">
                <li>
                  <a href="#">Kadın</a>
                </li>
                <li>
                  <a href="#">Erkek</a>
                </li>
                <li>
                  <a href="#">Çanta</a>
                </li>
                <li>
                  <a href="#">Kaban</a>
                </li>
                <li>
                  <a href="#">Ayakkabı</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-row">
        <div class="container">
          <div class="footer-copyright">
            <div class="site-copyright">
              <p>
              Telif Hakkı 2024 © E-Ticaret Teması.
              </p>
            </div>
            <a href="#">
              <img src="img/footer/cards.png" alt="" />
            </a>
            <div class="footer-menu">
              <ul class="footer-menu-list">
                <li class="list-item">
                  <a href="#">Gizlilik Politikası</a>
                </li>
                <li class="list-item">
                  <a href="#">Şartlar ve koşullar</a>
                </li>
                <li class="list-item">
                  <a href="#">İade Politikası</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
