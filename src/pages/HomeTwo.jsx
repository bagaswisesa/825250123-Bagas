import HeroSlider from '../components/HeroSlider.jsx'
import Destinations from '../components/Destinations.jsx'
import Guides from '../components/Guides.jsx'
import Pic from '../components/Pic.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { img } from '../images.js'

const slides = [
  { img: 'home-two/hero-1.jpg', tone: 0, title: 'Boats and Yacht Rental', text: 'Yachting is one of life’s greatest pleasures! We help create unforgettable yacht charters from start to finish.' },
  { img: 'home-two/hero-2.jpg', tone: 3, title: 'Sail Into The Blue', text: 'Temukan petualangan laut yang tak terlupakan bersama armada terbaik kami.' },
]

const testimonials = [
  [
    { name: 'Maydul Islam', meta: 'Nov 2022, Charter Sailboat' },
    { name: 'Mariya Soniya', meta: 'Nov 2022, Charter Sailboat' },
  ],
  [
    { name: 'Rakib Roni', meta: 'Dec 2022, Charter Yacht' },
    { name: 'Lisa J. Franco', meta: 'Jan 2023, Cabin Cruiser' },
  ],
]

const whyUs = [
  'Skippered charter', 'Skippered charter', 'Super easy crud',
  'There’s whole crud', 'Cabin cruiser', 'Skippered Charter',
  'Boat Sailing', '5Star Hotels', 'Event Planning',
]

const boats = [
  { name: 'Boats De La Presquile', loc: 'CENTRAL CROATIA', price: 7500 },
  { name: 'Aquavita Boats', loc: 'New York USA', price: 8500 },
  { name: 'Axioma Boats', loc: 'CENTRAL CROATIA', price: 7200 },
  { name: 'Alphas Yacht', loc: 'New York USA', price: 7600 },
  { name: 'Turners Yacht', loc: 'CENTRAL CROATIA', price: 6400 },
  { name: 'Bali Seagull', loc: 'New York USA', price: 7100 },
]

const plans = [
  { name: 'Basic Package', price: 55 },
  { name: 'Regular Package', price: 60, featured: true },
  { name: 'Deluxe Package', price: 80 },
]

const posts = [
  'Explorer yacht unveils exciting itinerary…',
  'Enjoy the view of the shore from a yacht…',
  'Deserts in Canada: Arizona’s Arid, Artistic Desert Oasis',
]

const loremShort =
  'Perfectly simple & easy to in our hour, when our power of choice is untrammelled and when nothing prevents…'

export default function HomeTwo() {
  return (
    <main>
      {/* HERO SLIDER */}
      <HeroSlider id="heroTwo" slides={slides} />

      {/* ABOUT + BOOKING */}
      <section id="yacht-rent" className="py-section pt-0 about-wrap">
        <div className="container">
          <div className="row g-4 align-items-center about-box">
            <div className="col-lg-4">
              <Pic tone={1} h={230} icon="bi-life-preserver" src={img('home-two/about.jpg')} />
            </div>
            <div className="col-lg-5">
              <span className="sub-title">Who We Are</span>
              <h3 className="fw-bold mt-1">Welcome to Sailing! Best Water Sports Agency in Thailand.</h3>
              <p className="text-muted small">
                Yachts are places of entertainment, discovery and relaxation. Yacht rentals here —
                adventure of a lifetime awaits you. Established in 1999.
              </p>
              <a href="#destinations" className="fw-semibold text-info text-decoration-none">
                More About Us <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div className="col-lg-3">
              <BookingCard />
            </div>
          </div>

          <div className="row g-4 mt-1">
            {[0, 1, 2].map((i) => (
              <div className="col-md-4" key={i}>
                <BookingCard />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Destinations />

      {/* TESTIMONIAL (carousel) */}
      <section className="py-section testi-section text-white" style={{ backgroundImage: `linear-gradient(rgba(8,24,48,.85), rgba(8,24,48,.85)), url(${img('home-two/testimonial-bg.jpg')}), linear-gradient(135deg, #0a2540, #1a8fd1)` }}>
        <div className="container">
          <SectionTitle sub="Testimonial" title="What Are Customer Says?" light />
          <div id="testiCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner pb-5">
              {testimonials.map((pair, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                  <div className="row g-4">
                    {pair.map((t, i) => (
                      <div className="col-lg-6" key={t.name}>
                        <div className="testi-card d-flex gap-3">
                          <Pic tone={idx * 2 + i} h={90} icon="bi-person-fill" className="testi-avatar" src={img(`home-two/testimonial-${idx * 2 + i + 1}.jpg`)} />
                          <div>
                            <p className="mb-2 small">{loremShort}</p>
                            <div className="text-warning mb-1">
                              {[...Array(5)].map((_, k) => <i key={k} className="bi bi-star-fill me-1" />)}
                            </div>
                            <strong className="d-block">{t.name}</strong>
                            <small className="text-info">{t.meta}</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators dots">
              {testimonials.map((_, i) => (
                <button key={i} type="button" data-bs-target="#testiCarousel" data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-section">
        <div className="container">
          <SectionTitle sub="What We Do" title="Whay Choose US" />
          <div className="row g-4">
            {whyUs.map((t, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="feature-card d-flex gap-3">
                  <div className="feature-icon"><i className="bi bi-compass" /></div>
                  <div>
                    <h6 className="fw-bold mb-1">{t}</h6>
                    <small className="text-muted">{loremShort}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YACHT LIST */}
      <section className="py-section bg-soft">
        <div className="container">
          <SectionTitle sub="Book Today" title="Yacht & Boats For All Seasons" />
          <div className="row g-4">
            {boats.map((b, i) => (
              <div className="col-lg-6" key={b.name}>
                <div className="boat-row d-flex gap-3">
                  <Pic tone={i} h={150} icon="bi-tsunami" className="boat-thumb" src={img(`home-two/boat-${i + 1}.jpg`)} />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between small">
                      <span className="text-info fw-semibold">{b.loc}</span>
                      <span><i className="bi bi-star-fill text-warning" /> 4.5/5</span>
                    </div>
                    <h5 className="fw-bold my-1">{b.name}</h5>
                    <small className="text-muted d-block mb-2">
                      12 Guests · 6 Beds · 2 Cabins · 1 Bathroom
                    </small>
                    <span className="price">${b.price.toLocaleString('en-US')} / week</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITION */}
      <section className="py-section bg-navy text-white">
        <div className="container">
          <span className="sub-title">Latest Model</span>
          <h2 className="section-title text-white mb-4">Explore the beauty of our exhibition.</h2>
          <div className="row g-3">
            <div className="col-lg-4"><Pic tone={1} h={250} icon="bi-image" src={img('home-two/exhibition-1.jpg')} /></div>
            <div className="col-lg-8"><Pic tone={0} h={250} icon="bi-image" src={img('home-two/exhibition-2.jpg')} /></div>
            <div className="col-6 col-lg-3"><Pic tone={2} h={180} icon="bi-image" src={img('home-two/exhibition-3.jpg')} /></div>
            <div className="col-6 col-lg-3"><Pic tone={3} h={180} icon="bi-image" src={img('home-two/exhibition-4.jpg')} /></div>
            <div className="col-lg-6"><Pic tone={4} h={180} icon="bi-image" src={img('home-two/exhibition-5.jpg')} /></div>
          </div>
        </div>
      </section>

      <Guides />

      {/* PRICING */}
      <section className="py-section bg-soft">
        <div className="container">
          <SectionTitle sub="Pricing Plan" title="Choose Your Pricing Plan" />
          <div className="row g-4 justify-content-center">
            {plans.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.name}>
                <div className={`price-card ${p.featured ? 'featured' : ''}`}>
                  <h5 className="fw-bold">{p.name}</h5>
                  <div className="price-big">${p.price}<small>/ Week</small></div>
                  <ul className="list-unstyled my-4">
                    {['Free breakfast', 'Free Champagne', 'Special Treatment', '24/7 Full Support', 'Delicious dinar'].map((f) => (
                      <li key={f} className="mb-2"><i className="bi bi-check-circle-fill text-info me-2" />{f}</li>
                    ))}
                  </ul>
                  <a href="#contact" className={`btn ${p.featured ? 'btn-info text-white' : 'btn-outline-info'} w-100`}>Choose Plan</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-section">
        <div className="container">
          <SectionTitle sub="Latest Blog" title="Recent blog & articles" />
          <div className="row g-4">
            {posts.map((t, i) => (
              <div className="col-md-4" key={t}>
                <article className="blog-card">
                  <Pic tone={i + 2} h={220} icon="bi-newspaper" src={img(`home-two/blog-${i + 1}.jpg`)} />
                  <div className="p-3">
                    <span className="badge bg-info mb-2">tripzap</span>
                    <h6 className="fw-bold">{t}</h6>
                    <a href="#blog" className="text-info text-decoration-none small fw-semibold">Read More →</a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function BookingCard() {
  return (
    <form className="booking-card" onSubmit={(e) => e.preventDefault()}>
      <h6 className="fw-bold mb-3">Book For Activities</h6>
      <input className="form-control mb-3" placeholder="Boat Meters" />
      <button className="btn btn-info text-white w-100">Start Booking</button>
    </form>
  )
}
