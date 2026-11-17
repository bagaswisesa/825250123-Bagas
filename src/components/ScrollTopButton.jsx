import { useEffect, useState } from 'react'

// Tombol scroll-up (hanya naik, tanpa scroll-down) di sisi KIRI layar
export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`float-btn scroll-top-btn ${show ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
    >
      <i className="bi bi-caret-up-fill" />
    </button>
  )
}
