import "./Contact.css"
const Contact = () => {
  return (
    <section class="contact">
    <div class="contact-top">
        <div class="contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20372.301466769117!2d33.630300585880306!3d40.621925975037485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4083c3a2ce9ea9df%3A0xd5424bc15ff87fdd!2zVWx1eWF6xLEgS2FtcMO8c8O8IEJpbGdpIMSwxZ9sZW0gTWVya2V6aQ!5e0!3m2!1str!2str!4v1713206126750!5m2!1str!2str"
                width="100%" height="500" style={{border:"0"}}  allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="contact-bottom">
        <div class="container">
            <div class="contact-titles">
                <h4>Bizimle iletişime geç</h4>
                <h2>İletişime Geç</h2>
                {/* <p>In hac habitasse platea dictumst. Pellentesque viverra sem nec orci lacinia, in bibendum urna
                    mollis. Quisque nunc lacus, varius vel leo a, pretium lobortis metus. Vivamus consectetur
                    consequat justo.</p> */}
            </div>
            <div class="contact-elements">
                <form class="contact-form">
                    <div class="">
                        <label>
                           Adınız
                            <span>*</span>
                        </label>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <label>
                            E-Posta Adresiniz
                            <span>*</span>
                        </label>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <label>
                            Konu
                            <span>*</span>
                        </label>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <label>
                            Mesajınız
                            <span>*</span>
                        </label>
                        <textarea id="author" name="author" type="text" defaultValue="" size="30" required=""></textarea>
                    </div>
                    <button class="btn btn-sm form-button">Mesaj Gönder</button>
                </form>
                <div class="contact-info">
                    <div class="contact-info-item">
                        <div class="contact-info-texts">
                            <strong>Çankırı Mağzası</strong>
                            <p class="contact-street">
                            
                               Çankırı Karatekin Üniversitesi Uluyazı Kampüsü Çankırı/Merkez</p>
                            <a href="tel:Phone: +1 1234 567 88">Phone: +90 1234 567 89</a>
                            <a href="mailto:Email: contact@example.com">Email: email@example.com</a>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-info-texts">
                            <strong> Açılış Saatleri</strong>
                            <p class="contact-date">
                                Pazartesi - Cuma : 09:00 - 17:00</p>
                            <p>Hafta Sonu Kapalı</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact