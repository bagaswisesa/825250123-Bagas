import Pic from './Pic.jsx'
import SectionTitle from './SectionTitle.jsx'
import { destinations } from '../data.js'
import { img } from '../images.js'

export default function Destinations() {
  return (
    <section id="destinations" className="py-section">
      <div className="container">
        <SectionTitle sub="Places To Go" title="The Perfect Destinations" />
        <div className="row g-3">
          {destinations.map((d) => (
            <div key={d.name} className={`col-md-6 ${d.cls}`}>
              <div className="dest-card">
                <Pic tone={d.tone} h={d.h} icon="bi-geo-alt" src={img(d.img)} alt={d.name} />
                <span className="dest-name">{d.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#destinations" className="btn btn-outline-info px-4">All Destinations</a>
        </div>
      </div>
    </section>
  )
}
