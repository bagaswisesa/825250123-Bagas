import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import ScrollTopButton from './components/ScrollTopButton.jsx'
import ChatButton from './components/ChatButton.jsx'
import Home from './pages/Home.jsx'
import HomeTwo from './pages/HomeTwo.jsx'

const getRoute = () => (window.location.hash === '#/home-two' ? 'home-two' : 'home')

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <Navbar route={route} />
      {route === 'home-two' ? <HomeTwo /> : <Home />}
      <Cta />
      <Footer />
      <ScrollTopButton />
      <ChatButton />
    </>
  )
}
