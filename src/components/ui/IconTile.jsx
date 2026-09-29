export default function IconTile({ icon: Icon, size = 48, className = '' }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl ${className}`}
      style={{ width: size, height: size, background: 'rgba(107,45,92,0.08)', color: '#6B2D5C' }}
    >
      <Icon size={Math.round(size * 0.5)} strokeWidth={1.75} aria-hidden="true" />
    </div>
  )
}
