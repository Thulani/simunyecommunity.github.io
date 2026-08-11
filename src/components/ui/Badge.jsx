const typeColors = {
  practice: { background: '#ECEEE7', color: '#2540E8' },
  clinic: { background: '#EEF2FF', color: '#2540E8' },
  friendly: { background: '#FFF0F6', color: '#FF3E7F' },
  Finance: { background: '#EEF2FF', color: '#2540E8' },
  Law: { background: '#F3E8FF', color: '#7C3AED' },
  Tech: { background: '#EEF2FF', color: '#4E63EE' },
  Consulting: { background: '#FEF9C3', color: '#854D0E' },
  Insurance: { background: '#FFF0F6', color: '#FF3E7F' },
  Energy: { background: '#FFF7ED', color: '#C2410C' },
  Marketing: { background: '#FFF0F6', color: '#9D174D' },
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
