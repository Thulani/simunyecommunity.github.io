import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const BASE = import.meta.env.BASE_URL

/* ─── Photo stack data ─────────────────────────────────────── */
const small = (name) => `${BASE}images/photos/small/${name}.jpg`

const photoCards = [
  { label: 'SEPT 2025',   r: '-14deg', top: '2%',  left: '0%',  z: 2,  src: small('2025-09-night-squad') },
  { label: 'WARM-UPS',    r: '9deg',   top: '8%',  left: '36%', z: 3,  src: small('2025-10-warm-ups') },
  { label: 'GOLDEN HOUR', r: '-8deg',  top: '0%',  left: '66%', z: 2,  src: small('2025-10-golden-hour') },
  { label: 'FIRST DAYS',  r: '20deg',  top: '28%', left: '4%',  z: 5,  src: small('2026-04-early-session') },
  { label: 'THREE MONTHS', r: '15deg', top: '32%', left: '54%', z: 6,  src: small('2026-07-three-months'),  large: true },
  { label: 'FULL SQUAD',  r: '-9deg',  top: '38%', left: '26%', z: 9,  src: small('2026-07-one-community'), large: true },
  { label: 'FLOODLIGHTS', r: '-19deg', top: '46%', left: '68%', z: 4,  src: small('2026-05-floodlights') },
  { label: 'WEDNESDAYS',  r: '-5deg',  top: '56%', left: '2%',  z: 3,  src: small('2026-04-wednesday-evening') },
  { label: 'HANDS UP',    r: '11deg',  top: '60%', left: '40%', z: 2,  src: small('2026-06-hands-up') },
  { label: 'CELEBRATION', r: '6deg',   top: '52%', left: '76%', z: 5,  src: small('2026-05-final-whistle') },
]

/* ─── Reusable transverse line divider ─────────────────────── */
function TransverseLine({ left = 'TRANSVERSE LINE', right }) {
  return (
    <div className="transverse-line">
      <div className="transverse-line__inner" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 28px', maxWidth: '1180px', margin: '0 auto' }}>
        <span className="transverse-label">{left}</span>
        <span className="transverse-label right">{right}</span>
      </div>
    </div>
  )
}

/* ─── About cards ───────────────────────────────────────────── */
const aboutCards = [
  {
    num: 'EVERY WED',
    title: 'Show Up, Every Week',
    body: 'Wednesday evenings at Parkmore have become more than practice - a space to unwind, recharge, laugh and support each other after the working day.',
    topColor: '#E0A43A',
  },
  {
    num: 'ALL WELCOME',
    title: 'A True Sense of Belonging',
    body: 'First time holding a netball or an experienced player looking for a new home - all ages, genders and skill levels have a place here.',
    topColor: '#6B2D5C',
  },
  {
    num: 'BEYOND NETBALL',
    title: 'A Lifestyle, Not Just a Team',
    body: 'Hikes, padel, running and wellness initiatives - because a community that moves together grows together.',
    topColor: '#10131A',
  },
]

/* ─── Sponsor stats ─────────────────────────────────────────── */
const sponsorStats = [
  { n: '20+', l: 'Active Members' },
  { n: '1', l: 'Tournament Hosted' },
  { n: 'NPO', l: 'Registered' },
]

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ padding: '100px 0 80px', overflow: 'hidden', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: '40px', alignItems: 'center' }}
               className="hero-grid">
            {/* Left column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ width: '26px', height: '2px', background: '#E0A43A', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#6B2D5C', textTransform: 'uppercase', fontWeight: 700 }}>
                  Parkmore, Sandton · Community Netball
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', color: '#10131A', marginBottom: 0 }}>
                WE ARE<br />
                <span style={{ color: '#6B2D5C' }}>ONE.</span>
              </h1>

              <p style={{ marginTop: '8px', fontSize: '0.94rem', color: '#565F6E', fontStyle: 'italic', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                Simunye - isiZulu for "we are one."
              </p>

              <p style={{ marginTop: '22px', maxWidth: '480px', fontSize: '1.05rem', color: '#565F6E', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0, lineHeight: 1.6 }}>
                A community netball team bringing together players from across Sandton - all ages, genders and skill levels. Every Wednesday we show up to play, connect, and support one another.
              </p>

              <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button to="/contact?type=join" variant="accent" size="lg">
                  Join a Session
                </Button>
                <Button to="/contact?type=sponsor" variant="outline" size="lg">
                  Become a Sponsor
                </Button>
              </div>
            </div>

            {/* Right column - photo stack */}
            <div>
              <div className="photo-stack">
                {photoCards.map((card) => (
                  <div
                    key={card.label}
                    className={`photo-card${card.large ? ' large' : ''}`}
                    style={{ '--r': card.r, top: card.top, left: card.left, zIndex: card.z }}
                  >
                    <img
                      src={card.src}
                      alt={card.label}
                      className="frame"
                    />
                    <span className="card-label">{card.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.84rem', color: '#565F6E' }}>
                Every Wednesday · 18:00 · Discovery Sports Park, Parkmore
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── TRANSVERSE DIVIDER ───────────────────────────────── */}
      <TransverseLine left="TRANSVERSE LINE" right="CENTER THIRD → GOAL THIRD" />

      {/* ── ABOUT SECTION ────────────────────────────────────── */}
      <section id="about" style={{ padding: '90px 0', background: 'var(--surface-tint, #ECEEE7)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ maxWidth: '600px', marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem,3.4vw,2.4rem)', color: '#10131A' }}>
              More than a team. A community.
            </h2>
            <p style={{ marginTop: '16px', color: '#565F6E', fontSize: '1.02rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
              What started with seven people and a shared love for netball has grown into a community built on passion, connection, and a true sense of belonging.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="cards-grid">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(16,19,26,0.08)',
                  borderTop: `4px solid ${card.topColor}`,
                  borderRadius: '16px',
                  padding: '30px 26px',
                }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", color: '#6B2D5C', fontSize: '0.78rem', marginBottom: '16px', display: 'block', fontWeight: 700 }}>
                  {card.num}
                </span>
                <h3 className="card-heading" style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#10131A' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#565F6E', fontSize: '0.94rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── TRANSVERSE DIVIDER ───────────────────────────────── */}
      <TransverseLine left="TRANSVERSE LINE" right="GOAL THIRD → PARTNERSHIP" />

      {/* ── SPONSOR SECTION ──────────────────────────────────── */}
      <section id="sponsor" style={{ padding: '90px 0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }} className="sponsor-grid">

            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ width: '26px', height: '2px', background: '#E0A43A', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#6B2D5C', textTransform: 'uppercase', fontWeight: 700 }}>
                  Partnership
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.85rem,3.6vw,2.5rem)', color: '#10131A' }}>
                Put your brand courtside
              </h2>
              <p style={{ marginTop: '18px', color: '#565F6E', maxWidth: '480px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                Simunye is a registered, self-funded NPO bringing people together through sport every week. Partner with a growing, community-first team that gives back on and off the court.
              </p>

              <div style={{ display: 'flex', gap: '36px', marginTop: '32px', flexWrap: 'wrap' }}>
                {sponsorStats.map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.9rem', color: '#6B2D5C' }}>{s.n}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#565F6E', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - sponsor card */}
            <div style={{ background: '#3B1633', color: '#fff', borderRadius: '16px', padding: '32px' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", color: '#E0A43A', fontSize: '0.76rem', display: 'block', marginBottom: '14px', letterSpacing: '1.5px', fontWeight: 700 }}>
                SPONSOR PACKAGE
              </span>
              <h3 className="card-heading" style={{ fontSize: '1.25rem', marginBottom: '14px', color: '#fff' }}>
                Courtside Partner
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Logo placement on kit and tournament materials',
                  'Featured spot on the Hub\'s sponsor page',
                  'Visibility at training, tournaments and community events',
                  'Support a registered NPO empowering people through sport',
                ].map((item) => (
                  <li key={item} style={{ padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', display: 'flex', gap: '10px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                    <span style={{ color: '#E0A43A', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?type=sponsor"
                style={{ display: 'block', textAlign: 'center', marginTop: '22px', background: '#E0A43A', color: '#3B1633', fontWeight: 700, padding: '14px 26px', borderRadius: '999px', fontSize: '0.94rem', fontFamily: "'Inter', sans-serif", textTransform: 'none', letterSpacing: 0 }}
              >
                Enquire About Sponsorship
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .sponsor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── JOIN CTA ─────────────────────────────────────────── */}
      <section
        id="join"
        style={{ padding: '90px 0', textAlign: 'center', background: '#3B1633', color: '#fff' }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ width: '26px', height: '2px', background: '#E0A43A', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#E0A43A', textTransform: 'uppercase', fontWeight: 700 }}>
              Get Involved
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#fff' }}>
            Come play with us
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', margin: '16px auto 28px', maxWidth: '440px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
            Whether you want to play, sponsor, or just come watch - there's a place for you in the Simunye family.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Get In Touch
          </Button>
        </div>
      </section>

    </main>
  )
}
