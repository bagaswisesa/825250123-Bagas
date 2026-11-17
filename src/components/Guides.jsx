import Pic from './Pic.jsx'
import SectionTitle from './SectionTitle.jsx'
import { guides } from '../data.js'
import { img } from '../images.js'

export default function Guides() {
  return (
    <section className="py-section">
      <div className="container">
        <SectionTitle sub="Our Team" title="Meet Our Excellent Guides" />
        <div className="row g-4">
          {guides.map((g, i) => (
            <div className="col-sm-6 col-lg-3" key={g.name}>
              <div className="guide-card text-center">
                <Pic tone={i} h={260} icon="bi-person" src={img(g.img)} alt={g.name} />
                <div className="guide-info">
                  <h5 className="mb-0">{g.name}</h5>
                  <small className="text-muted">{g.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
