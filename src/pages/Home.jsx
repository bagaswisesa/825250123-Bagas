import { useEffect, useRef, useState } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import Destinations from '../components/Destinations.jsx'
import Guides from '../components/Guides.jsx'
import Pic from '../components/Pic.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { img } from '../images.js'

const slides = [
  { img: 'home/hero-1.jpg', tone: 3, title: 'Our Premier Boats', text: 'Enjoy the perfect service and luxury' },
  { img: 'home/hero-2.jpg', tone: 0, title: 'Boats and Yacht Rental', text: 'Enjoy the perfect service and luxury' },
]

const fleet = ['Aperahama Yacht', 'Pershing 2023 Yacht', 'Parahita Yacht']

const features = [
  ['bi-journal-text', 'Charter Guide'], ['bi-tv', 'TV And Music'], ['bi-gear', 'Yacht Service'],
  ['bi-wifi', 'Free Wifi'], ['bi-calendar-event', 'Event Planing'], ['bi-globe2', 'Unbiased global'],
]

const stats = [
  { end: 914, label: 'Yachts to See' },
  { end: 124, label: 'Charter Destination' },
  { end: 75, label: 'Year in Business' },
  { end: 85, label: 'Yachts Sold' },
]

const reviews = ['Rakib Roni', 'Lisa J. Franco', 'Mydul Islam']

const news = [
  'Explorer yacht unveils exciting itinerary…',
  'Enjoy the view of the shore from a yacht…',
  'Bahamas announce new yacht charter tax…',
  'Superyacht set to join the charter fleet…',
]

const dummy =
  'Vestibulum eu quam nec neque pellentesqe efficitur id eget nisl. Proin porta est convall lacus blandit pretium sed non enim.'

function Counter({ end, label }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / 1500, 1)
        setVal(Math.round(end * p))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center text-white">
      <div className="stat-num">{val}K +</div>
      <div className="small opacity-75">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="hero-wrap">
        <HeroSlider id="heroHome" slides={slides} height={620} />
        {/* Form pencarian */}
        <div className="container search-float">
          <form className="search-bar row g-3 align-items-end" onSubmit={(e) => e.preventDefault()}>
            <div className="col-md-3">
              <label className="form-label small fw-semibold">Pick - Up Date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label small fw-semibold">Drop - Up Date:</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <label className="form-label small fw-semibold">Select Make</label>
              <select className="form-select" defaultValue="">
                <option value="">All Makes</option>
                <option>Pershing</option>
                <option>Azimut</option>
                <option>Sunseeker</option>
              </select>
            </div>
            <div className="col-md-3">
              <button className="btn btn-info text-white w-100">Search</button>
            </div>
          </form>
        </div>
      </div>

      {/* ABOUT */}
      <section id="yacht-rent" className="py-section mt-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5"><Pic tone={1} h={380} icon="bi-life-preserver" src={img('home/about.jpg')} /></div>
            <div className="col-lg-7">
              <span className="sub-title">About Us</span>
              <h2 className="section-title">Welcome to Amanus, the best yachting platform</h2>
              <p className="text-muted">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the printer took a galley.
              </p>
              <div className="row g-3 mb-4">
                {['Exciting Places', 'Different Yachts'].map((t) => (
                  <div className="col-sm-6" key={t}>
                    <h6 className="fw-bold"><i className="bi bi-compass text-info me-2" />{t}</h6>
                    <small className="text-muted">Lorem ipsum scelerisque molestie id molestie magna etiam sollicitudin tempus.</small>
                  </div>
                ))}
              </div>
              <a href="#destinations" className="btn btn-info text-white px-4">View More</a>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME BANNER */}
      <section className="welcome-banner" style={{ backgroundImage: `linear-gradient(rgba(8,24,48,.45), rgba(8,24,48,.45)), url(${img('home/welcome-family.jpg')}), linear-gradient(135deg, #1a8fd1, #8fd3f4)` }}>
        <div className="container">
          <div className="welcome-box">
            <h3 className="fw-bold">Welcome!</h3>
            <p>We charter professionally crewed, luxury yachts throughout the Caribbean from the British Virgin Islands (BVI) to the Grenadines!</p>
            <a href="#yacht-rent" className="btn btn-light text-info">View Special Offers</a>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="py-section">
        <div className="container">
          <SectionTitle sub="For Sale & Rent" title="Fleet of Luxury Boats" />
          <div className="row g-4">
            {fleet.map((f, i) => (
              <div className="col-md-6 col-lg-4" key={f}>
                <div className="fleet-card">
                  <Pic tone={i + 1} h={200} icon="bi-tsunami" src={img(`home/fleet-${i + 1}.jpg`)} />
                  <div className="p-3">
                    <h5 className="fw-bold mb-1">{f}</h5>
                    <div className="text-warning small mb-2">
                      {[...Array(5)].map((_, k) => <i key={k} className="bi bi-star-fill me-1" />)}
                      <span className="text-muted">(5.00 Rating)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>From <s className="text-muted">$10</s> <strong className="text-info">$300</strong></span>
                      <a href="#contact" className="btn btn-sm btn-info text-white">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#yacht-rent" className="btn btn-outline-info px-4">View All Yachts</a>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-section offer-section text-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h2 className="section-title text-white">What We Offer</h2>
              <p className="opacity-75">Explore</p>
              <div className="d-flex gap-3 mb-4">
                {['Yacht Charters', 'Yacht Management'].map((t) => (
                  <div key={t} className="offer-circle">{t}</div>
                ))}
              </div>
              <a href="#destinations" className="btn btn-info text-white">Learn More</a>
            </div>
            <div className="col-lg-7"><Pic tone={0} h={300} icon="bi-tsunami" src={img('home/offer.jpg')} /></div>
          </div>
        </div>
      </section>

      <Destinations />

      {/* VIDEO + STATS */}
      <section className="video-stats">
        <Pic tone={3} h={380} icon="bi-tsunami" className="video-bg" src={img('home/video-bg.jpg')} />
        <div className="video-play">
          <button className="btn btn-light rounded-circle play-btn" aria-label="Play video">
            <i className="bi bi-play-fill fs-3" />
          </button>
        </div>
        <div className="stats-bar">
          <div className="container">
            <div className="row g-3 py-4">
              {stats.map((s) => (
                <div className="col-6 col-lg-3" key={s.label}><Counter {...s} /></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WAY TO SUCCESS */}
      <section className="py-section">
        <div className="container">
          <SectionTitle sub="Basic Features" title="Our Way to Success" />
          <div className="row g-4">
            {features.map(([icon, t]) => (
              <div className="col-md-6 col-lg-4" key={t}>
                <div className="feature-card">
                  <div className="feature-icon mb-3"><i className={`bi ${icon}`} /></div>
                  <h6 className="fw-bold">{t}</h6>
                  <small className="text-muted">{dummy}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-section testi-section text-white" style={{ backgroundImage: `linear-gradient(rgba(8,24,48,.85), rgba(8,24,48,.85)), url(${img('home/testimonial-bg.jpg')}), linear-gradient(135deg, #0a2540, #1a8fd1)` }}>
        <div className="container">
          <SectionTitle sub="Testimonials" title="The Best Days Are Spent" light />
          <div className="row g-4">
            {reviews.map((n, i) => (
              <div className="col-md-4 text-center" key={n}>
                <p className="opacity-75">Your appreciation means the world to us, and we're delighted that you enjoyed your charter</p>
                <Pic tone={i} h={70} round icon="bi-person-fill" className="mx-auto mb-2 testi-avatar" src={img(`home/avatar-${i + 1}.jpg`)} />
                <strong>{n}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Guides />

      {/* NEWS FEED */}
      <section id="blog" className="py-section bg-soft">
        <div className="container">
          <SectionTitle sub="Blogs & News" title="Our Latest News Feed" />
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="news-big">
                <Pic tone={2} h={440} icon="bi-newspaper" src={img('home/news-big.jpg')} />
                <div className="news-caption">
                  <span className="badge bg-info mb-2">Boat Trip</span>
                  <h4>Top Gorgeous Yachts In The History Of The Boat Sailing</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {news.map((n, i) => (
                  <div className="col-sm-6" key={n}>
                    <article className="blog-card">
                      <Pic tone={i} h={140} icon="bi-newspaper" src={img(`home/news-${i + 1}.jpg`)} />
                      <div className="p-3">
                        <small className="text-info text-uppercase">Uncategorized</small>
                        <h6 className="fw-bold mt-1 mb-0">{n}</h6>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
