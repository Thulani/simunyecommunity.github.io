const typeColors = {
  practice: { background: '#ECEEE7', color: '#6B2D5C' },
  clinic: { background: '#F6ECF3', color: '#6B2D5C' },
  friendly: { background: '#FBF0DA', color: '#8A5A0A' },
  tournament: { background: '#FBF0DA', color: '#8A5A0A' },
  social: { background: '#F6ECF3', color: '#8C4A7A' },
  Finance: { background: '#F6ECF3', color: '#6B2D5C' },
  Law: { background: '#F3E8FF', color: '#7C3AED' },
  Tech: { background: '#F6ECF3', color: '#8C4A7A' },
  Consulting: { background: '#FEF9C3', color: '#854D0E' },
  Insurance: { background: '#FBF0DA', color: '#8A5A0A' },
  Energy: { background: '#FFF7ED', color: '#C2410C' },
  Marketing: { background: '#FBF0DA', color: '#9D174D' },
  Other: { background: '#ECEEE7', color: '#565F6E' },
}

export default function Badge({ label, type }) {
  const style = typeColors[type] || typeColors[label] || { background: '#ECEEE7', color: '#565F6E' }
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={style}
    >
      {label}
    </span>
  )
}
