import { useState } from 'react'

const tones = [
  'linear-gradient(135deg,#0b3d6b,#1a8fd1 60%,#8fd3f4)',
  'linear-gradient(135deg,#102a43,#2f6f9f 55%,#d9b36c)',
  'linear-gradient(135deg,#073b4c,#118ab2 60%,#ffd166)',
  'linear-gradient(135deg,#1b2845,#274c77 55%,#6096ba)',
  'linear-gradient(135deg,#0a2540,#00a8e8 70%,#c7f0ff)',
]

// Jika `src` diisi dan filenya ada -> tampil <img>. Jika file belum ada -> tampil gradient placeholder.
export default function Pic({ tone = 0, h = 200, label, icon = 'bi-water', className = '', round = false, src, alt = '' }) {
  const [failed, setFailed] = useState(false)
  const showImg = src && !failed

  return (
    <div
      className={`pic ${round ? 'rounded-circle' : ''} ${className}`}
      style={{ background: showImg ? '#0a2540' : tones[tone % tones.length], minHeight: h, height: round ? h : undefined }}
    >
      {showImg ? (
        <img src={src} alt={alt} className="pic-img" onError={() => setFailed(true)} />
      ) : (
        <>
          <i className={`bi ${icon}`} />
          {label && <span>{label}</span>}
        </>
      )}
    </div>
  )
}
