import { useEffect, useState } from 'react'
import { img } from '../images.js'

export default function Navbar({ route }) {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top site-nav ${solid ? 'nav-solid' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#/">
          <img src={img('shared/logo.png')} alt="Tripzap" className="brand-logo" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white fs-2" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${route ? 'active' : ''}`}
                href="#/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className={`dropdown-item ${route === 'home' ? 'active' : ''}`} href="#/">
                    Home One
                  </a>
                </li>
                <li>
                  <a className={`dropdown-item ${route === 'home-two' ? 'active' : ''}`} href="#/home-two">
                    Home Two
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#yacht-rent">Yacht Rent</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destinations">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
