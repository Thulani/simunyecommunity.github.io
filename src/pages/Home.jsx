import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const BASE = import.meta.env.BASE_URL

/* ─── Photo stack data ─────────────────────────────────────── */
const photoCards = [
  { label: 'SOCIAL',      r: '-14deg', top: '2%',  left: '0%',  z: 2,  src: `${BASE}images/photo-stack/img.png` },
  { label: 'TRAINING',    r: '9deg',   top: '8%',  left: '36%', z: 3,  src: `${BASE}images/photo-stack/img_1.png` },
  { label: 'HUDDLE',      r: '-8deg',  top: '0%',  left: '66%', z: 2,  src: `${BASE}images/photo-stack/img_2.png` },
  { label: 'WARM-UP',     r: '20deg',  top: '28%', left: '4%',  z: 5,  src: `${BASE}images/photo-stack/img_3.png` },
  { label: 'MATCH DAY',   r: '15deg',  top: '32%', left: '54%', z: 6,  src: `${BASE}images/photo-stack/img_4.png`,  large: true },
  { label: 'FULL SQUAD',  r: '-9deg',  top: '38%', left: '26%', z: 9,  src: `${BASE}images/photo-stack/img_5.png`,  large: true },
  { label: 'COURTSIDE',   r: '-19deg', top: '46%', left: '68%', z: 4,  src: `${BASE}images/photo-stack/img_6.png` },
  { label: 'AWARDS',      r: '-5deg',  top: '56%', left: '2%',  z: 3,  src: `${BASE}images/photo-stack/img_7.png` },
  { label: 'SPONSORS',    r: '11deg',  top: '60%', left: '40%', z: 2,  src: `${BASE}images/photo-stack/img_8.png` },
  { label: 'CELEBRATION', r: '6deg',   top: '52%', left: '76%', z: 5,  src: `${BASE}images/photo-stack/img_9.png` },
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
    num: 'GS→GK',
    title: 'Mixed & Rotating',
    body: 'Every session mixes up the lineup and rotates positions, so nobody\'s locked into one role and everybody learns the whole game.',
    topColor: '#FF3E7F',
  },
  {
    num: 'NO LEAGUE',
    title: 'Community First',
    body: 'No league play, no standings pressure — just a consistent, social court that people from different companies keep coming back to.',
    topColor: '#2540E8',
  },
  {
    num: 'SANDTON',
    title: 'Cross-Company',
    body: 'Players come from all over Sandton\'s corporate scene, making every session a genuine mixer as much as a match.',
    topColor: '#10131A',
  },
]

/* ─── Sponsor stats ─────────────────────────────────────────── */
const sponsorStats = [
  { n: '7', l: 'Positions Rotated' },
  { n: '0', l: 'League Pressure' },
  { n: '1', l: 'Sandton Community' },
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
                <span style={{ width: '26px', height: '2px', background: '#FF3E7F', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#2540E8', textTransform: 'uppercase', fontWeight: 700 }}>
                  Sandton · Corporate Social Netball
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', color: '#10131A', marginBottom: 0 }}>
                WE ARE<br />
                <span style={{ color: '#2540E8' }}>ONE.</span>
              </h1>

              <p style={{ marginTop: '8px', fontSize: '0.94rem', color: '#565F6E', fontStyle: 'italic', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                Simunye — Zulu for "we are one."
              </p>

              <p style={{ marginTop: '22px', maxWidth: '480px', fontSize: '1.05rem', color: '#565F6E', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0, lineHeight: 1.6 }}>
                A mixed corporate netball team drawing players from companies across Sandton. No league tables, no fixed positions — just a court full of people who show up for each other every week.
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

            {/* Right column — photo stack */}
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
                GS · GA · WA · C · WD · GD · GK — the full rotation, every match
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
              Built around the court, not a league table
            </h2>
            <p style={{ marginTop: '16px', color: '#565F6E', fontSize: '1.02rem', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
              Simunye exists for the people who want the game without the grind — mixed teams, rotating positions, and a standing invite to anyone across Sandton's corporate community.
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
                <span style={{ fontFamily: "'Space Mono', monospace", color: '#2540E8', fontSize: '0.78rem', marginBottom: '16px', display: 'block', fontWeight: 700 }}>
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
                <span style={{ width: '26px', height: '2px', background: '#FF3E7F', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#2540E8', textTransform: 'uppercase', fontWeight: 700 }}>
                  Partnership
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.85rem,3.6vw,2.5rem)', color: '#10131A' }}>
                Put your brand courtside
              </h2>
              <p style={{ marginTop: '18px', color: '#565F6E', maxWidth: '480px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                Simunye brings together players from companies across Sandton every week — a warm, visible, community-first audience your brand can stand alongside.
              </p>

              <div style={{ display: 'flex', gap: '36px', marginTop: '32px', flexWrap: 'wrap' }}>
                {sponsorStats.map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.9rem', color: '#FF3E7F' }}>{s.n}</div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#565F6E', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — sponsor card */}
            <div style={{ background: '#121E6B', color: '#fff', borderRadius: '16px', padding: '32px' }}>
              <span style={{ fontFamily: "'Space Mono', monospace", color: '#FF3E7F', fontSize: '0.76rem', display: 'block', marginBottom: '14px', letterSpacing: '1.5px', fontWeight: 700 }}>
                SPONSOR PACKAGE
              </span>
              <h3 className="card-heading" style={{ fontSize: '1.25rem', marginBottom: '14px', color: '#fff' }}>
                Courtside Partner
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Logo placement on kit and session materials',
                  'Featured spot on the Hub\'s sponsor page',
                  'Shout-outs at community sessions and events',
                  'Direct line to a cross-company Sandton audience',
                ].map((item) => (
                  <li key={item} style={{ padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.78)', fontSize: '0.9rem', display: 'flex', gap: '10px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                    <span style={{ color: '#FF3E7F', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?type=sponsor"
                style={{ display: 'block', textAlign: 'center', marginTop: '22px', background: '#FF3E7F', color: '#fff', fontWeight: 700, padding: '14px 26px', borderRadius: '999px', fontSize: '0.94rem', fontFamily: "'Inter', sans-serif", textTransform: 'none', letterSpacing: 0 }}
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
        style={{ padding: '90px 0 50px', textAlign: 'center', background: '#121E6B', color: '#fff' }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ width: '26px', height: '2px', background: '#FF3E7F', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.74rem', letterSpacing: '2px', color: '#FF3E7F', textTransform: 'uppercase', fontWeight: 700 }}>
              Get Involved
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#fff' }}>
            Come rotate with us
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', margin: '16px auto 28px', maxWidth: '440px', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
            Whether you want to play, sponsor, or just come watch — there's a place for you on the Simunye court.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Get In Touch
          </Button>
          <div style={{ marginTop: '56px', paddingTop: '26px', borderTop: '1px solid rgba(255,255,255,0.14)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.83rem', color: 'rgba(255,255,255,0.6)' }}>
            <span>© {new Date().getFullYear()} Simunye Netball Hub — Sandton, Gauteng</span>
            <span>Mixed · Social · Corporate · Community</span>
          </div>
        </div>
      </section>

    </main>
  )
}
