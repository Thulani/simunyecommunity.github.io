import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import playerDirectory, { industries } from '../data/playerDirectory'
import wellnessPosts from '../data/wellness'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function CorporateHub() {
  const [activeIndustry, setActiveIndustry] = useState('All')

  const filteredPlayers = activeIndustry === 'All'
    ? playerDirectory
    : playerDirectory.filter((p) => p.industry === activeIndustry)

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
            Corporate Hub
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>
            Sandton's professionals, connected.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Simunye brings together professionals from across Sandton's leading firms. This is the B2B networking that actually works — built on shared experience, not business cards.
          </p>
        </div>
      </section>

      {/* Value prop */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏢',
                title: 'Real professionals',
                desc: 'Players are active working professionals from Sandton\'s finance, law, tech, and consulting sectors.',
              },
              {
                icon: '🤝',
                title: 'Genuine connections',
                desc: 'Shared physical experience builds trust and rapport faster than any networking event — relationships that last beyond the court.',
              },
              {
                icon: '📣',
                title: 'Visible community',
                desc: 'Our events, socials, and this hub give sponsors and partners direct access to a high-value professional audience.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 text-center"
                style={{ border: '1px solid rgba(16,19,26,0.08)' }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg mb-2 card-heading" style={{ color: '#10131A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Directory */}
      <section className="py-16 px-4" style={{ background: '#ECEEE7' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Player Directory"
            title="Who's on the team."
            subtitle="Opt-in only — players listed here have explicitly agreed to be included."
          />

          {/* Industry filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveIndustry(industry)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
                style={
                  activeIndustry === industry
                    ? { background: '#2540E8', color: '#fff', borderColor: '#2540E8' }
                    : { background: '#fff', borderColor: 'rgba(16,19,26,0.12)', color: '#565F6E' }
                }
              >
                {industry}
              </button>
            ))}
          </div>

          {filteredPlayers.length === 0 ? (
            <p className="text-center py-12" style={{ color: '#565F6E' }}>No players listed for this industry yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  className="bg-white rounded-2xl p-5 flex gap-4 items-start hover:shadow-sm transition-all"
                  style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
                >
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-14 h-14 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-sm card-heading" style={{ color: '#10131A' }}>{player.name}</h3>
                        <p className="text-xs" style={{ color: '#565F6E' }}>{player.role}</p>
                        <p className="text-xs" style={{ color: '#565F6E' }}>{player.company}</p>
                      </div>
                      {player.linkedIn && (
                        <a
                          href={player.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 transition-colors"
                          style={{ color: '#565F6E' }}
                          onMouseEnter={e => (e.currentTarget).style.color = '#2540E8'}
                          onMouseLeave={e => (e.currentTarget).style.color = '#565F6E'}
                          aria-label={`${player.name} on LinkedIn`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <Badge label={player.industry} type={player.industry} />
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: '#ECEEE7', color: '#565F6E' }}
                      >
                        {player.position}
                      </span>
                    </div>
                    {player.isSample && (
                      <p className="text-xs text-amber-600 mt-1">Sample entry</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="mt-6 text-xs text-center" style={{ color: '#565F6E' }}>
            To be listed in the player directory, contact team admin and opt in explicitly.
          </p>
        </div>
      </section>

      {/* Wellness Blog */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Corporate Wellness Blog"
            title="Built for Sandton professionals."
            subtitle="Articles on sport, networking, recovery, and the intersection of professional and physical performance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wellnessPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/corporate-hub/wellness/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
                style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  {post.isSample && (
                    <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider">Sample content</span>
                  )}
                  <time className="text-xs block mt-1 mb-2" style={{ color: '#565F6E' }}>{formatDate(post.date)}</time>
                  <h3
                    className="text-lg mb-2 card-heading transition-colors"
                    style={{ color: '#10131A' }}
                    onMouseEnter={e => (e.currentTarget).style.color = '#2540E8'}
                    onMouseLeave={e => (e.currentTarget).style.color = '#10131A'}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{post.summary}</p>
                  <span
                    className="mt-4 inline-flex items-center text-sm font-bold"
                    style={{ color: '#2540E8' }}
                  >
                    Read more <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ background: '#F5F6F1' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4" style={{ color: '#10131A' }}>Join the network.</h2>
          <p className="mb-6" style={{ color: '#565F6E' }}>
            Whether you're looking for new professional connections or just a great Saturday morning — Simunye delivers both.
          </p>
          <Button to="/contact?type=join" variant="primary" size="lg">
            Register Your Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
