export default function SectionTitle({ sub, title, light = false }) {
  return (
    <div className="text-center mb-5">
      <span className="sub-title">{sub}</span>
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
    </div>
  )
}
