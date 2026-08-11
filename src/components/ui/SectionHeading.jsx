export default function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2.5 mb-4 ${centered ? 'justify-center' : ''}`}
        >
          <span
            className="inline-block shrink-0"
            style={{ width: '26px', height: '2px', background: '#FF3E7F' }}
          />
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.74rem',
              letterSpacing: '2px',
              color: '#2540E8',
              textTransform: 'uppercase',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.4vw, 2.4rem)',
          color: light ? '#ffffff' : '#10131A',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(255,255,255,0.72)' : '#565F6E' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
