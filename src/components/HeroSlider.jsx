import Pic from './Pic.jsx'
import { img } from '../images.js'

// Slider memakai komponen Carousel Bootstrap (JS bundle lokal)
export default function HeroSlider({ id, slides, height = 640 }) {
  return (
    <header id={id} className="carousel slide carousel-fade hero" data-bs-ride="carousel" data-bs-interval="4500">
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} style={{ height }}>
            <Pic tone={s.tone} h={height} icon="bi-tsunami" className="hero-bg" src={s.img && img(s.img)} />
            <div className="hero-overlay" />
            <div className="container hero-caption">
              <h1 className="hero-title">{s.title}</h1>
              <p className="hero-text">{s.text}</p>
              <a href={s.href || '#yacht-rent'} className="btn btn-info text-white rounded-1 px-4 py-2">
                {s.cta || 'Discover More'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </header>
  )
}
