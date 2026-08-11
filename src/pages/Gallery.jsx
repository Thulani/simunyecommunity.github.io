import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionHeading from '../components/ui/SectionHeading'
import galleryData from '../data/gallery'

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = galleryData.map((item) => ({
    src: item.src,
    alt: item.caption,
  }))

  function openLightbox(i) {
    setIndex(i)
    setOpen(true)
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #2540E8, #121E6B)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", color: '#A5B4FC', letterSpacing: '2px' }}
          >
            Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>The team in action.</h1>
          <p
            className="text-lg"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Photos from our practices, clinics, friendlies, and events.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow={`${galleryData.length} photos`}
            title="Season highlights."
            subtitle="Click any photo to view full size."
          />
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryData.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className="block w-full break-inside-avoid overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2540E8]"
                onClick={() => openLightbox(i)}
                aria-label={`View photo: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="sr-only">{item.caption}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </main>
  )
}
