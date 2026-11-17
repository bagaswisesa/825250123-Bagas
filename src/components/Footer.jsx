import { lorem } from '../data.js'
import { img } from '../images.js'

const links = ['Home', 'Yacht Rent', 'Destination', 'Pages', 'Blog', 'Contact']
const socials = ['facebook', 'pinterest', 'instagram', 'linkedin']

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      {/* ===== 4 kolom ===== */}
      <div className="container footer-main">
        <div className="row g-4">
          {/* Kolom 1: logo + deskripsi + sosial media */}
          <div className="col-12 col-md-6 col-lg-3">
            <a href="#/" className="d-inline-block mb-3">
              <img src={img('shared/logo.png')} alt="Tripzap" className="brand-logo" />
            </a>
            <p className="footer-text">{lorem}</p>
            <div className="d-flex gap-2">
              {socials.map((s) => (
                <a key={s} href="#/" className="social" aria-label={s}>
                  <i className={`bi bi-${s}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Quicklinks */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="footer-heading">Quicklinks</h5>
            <ul className="list-unstyled footer-links">
              {links.map((l) => (
                <li key={l}><a href="#/">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Get In Touch */}
          <div className="col-6 col-md-6 col-lg-3">
            <h5 className="footer-heading">Get In Touch</h5>
            <ul className="list-unstyled footer-contact">
              <li><i className="bi bi-geo-alt-fill" /><span><strong>Location:</strong>2976 Sunrise Avenue, Las Vegas</span></li>
              <li><i className="bi bi-envelope" /><span><strong>Email:</strong>example@mail.com</span></li>
              <li><i className="bi bi-telephone-fill" /><span><strong>Phone:</strong>+8 91230 456 789</span></li>
            </ul>
          </div>

          {/* Kolom 4: Gallery (4 foto) */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-heading">Gallery</h5>
            <div className="row g-2 footer-gallery">
              {[0, 1, 2, 3].map((i) => (
                <div className="col-6" key={i}>
                  <div className="gallery-thumb" style={{ backgroundImage: `url(${img(`shared/footer-gallery-${i + 1}.jpg`)}), linear-gradient(135deg, #1a8fd1, #8fd3f4)` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Copyright: hanya 1 kolom ===== */}
      <div className="container">
        <div className="row">
          <div className="col-12 footer-bottom text-center">
            Boat Trip &copy;2025. Boat All Rights Reserved By <a href="#/">Dream IT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
