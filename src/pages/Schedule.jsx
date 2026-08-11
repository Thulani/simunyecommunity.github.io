import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import events from '../data/events'

function isPast(dateStr) {
  return new Date(dateStr) < new Date()
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const typeLabel = {
  practice: 'Practice',
  clinic: 'Clinic',
  friendly: 'Friendly',
}

const upcomingEvents = events
  .filter((e) => !isPast(e.date))
  .sort((a, b) => new Date(a.date) - new Date(b.date))

const pastEvents = events
  .filter((e) => isPast(e.date))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Schedule() {
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
            Schedule
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>What's on.</h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Practices, clinics, and friendlies — all in one place.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Coming Up"
            title="Upcoming events"
            subtitle="Updated weekly by team admin."
          />

          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12" style={{ color: '#565F6E' }}>
              <p className="text-lg">No upcoming events yet — check back soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl bg-white p-6 hover:shadow-sm transition-all"
                  style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <Badge label={typeLabel[event.type]} type={event.type} />
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold" style={{ color: '#10131A' }}>{formatDate(event.date)}</p>
                      <p className="text-sm" style={{ color: '#565F6E' }}>{event.time}</p>
                    </div>
                  </div>
                  <h3 className="text-lg mb-1 card-heading" style={{ color: '#10131A' }}>{event.title}</h3>
                  <p className="text-sm mb-2 flex items-center gap-1" style={{ color: '#565F6E' }}>
                    <span>📍</span> {event.venue}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past events */}
      {pastEvents.length > 0 && (
        <section className="py-16 px-4" style={{ background: '#F5F6F1' }}>
          <div className="max-w-3xl mx-auto">
            <SectionHeading eyebrow="Archive" title="Past events" />
            <div className="space-y-3">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-xl bg-white p-5 opacity-60"
                  style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Badge label={typeLabel[event.type]} type={event.type} />
                      <span className="font-semibold text-sm" style={{ color: '#565F6E' }}>{event.title}</span>
                    </div>
                    <span className="text-xs" style={{ color: '#565F6E' }}>{formatDate(event.date)}</span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: '#565F6E' }}>📍 {event.venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
