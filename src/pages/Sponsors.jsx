import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import teamStats from '../data/teamStats'

const statCards = [
  { label: 'Active Players', value: teamStats.activePlayers, icon: '🏃' },
  { label: 'Companies Represented', value: teamStats.companiesRepresented, icon: '🏢' },
  { label: 'Sessions / Month', value: teamStats.sessionsPerMonth, icon: '📅' },
  { label: 'Years Active', value: teamStats.yearsActive, icon: '⭐' },
]

const valueProps = [
  {
    icon: '👥',
    title: 'A high-value professional audience',
    desc: 'Our players are working professionals from Sandton\'s leading finance, law, tech, and consulting firms — a premium demographic that is genuinely difficult to reach through conventional advertising.',
  },
  {
    icon: '🤝',
    title: 'Real B2B networking value',
    desc: 'Sponsors interact directly with players and their professional networks through our events, socials, and branded sessions. These are relationships, not impressions.',
  },
  {
    icon: '🌍',
    title: 'Community impact',
    desc: 'Simunye gives professionals from different backgrounds a shared space. A sponsorship here is visible community investment — not just a logo placement.',
  },
  {
    icon: '📲',
    title: 'Digital presence',
    desc: 'Your brand features on this website, in our social content, and in our player communications — reaching a growing audience of Sandton professionals and their networks.',
  },
]

export default function Sponsors() {
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
            Sponsorship
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>
            Partner with Simunye.
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Simunye offers sponsors rare access to a concentrated, high-value professional community in the heart of Sandton. This isn't traditional sports sponsorship — it's strategic brand placement in a genuine B2B network.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact?type=sponsor" variant="accent" size="lg">
              Enquire About Sponsorship
            </Button>
            <a
              href={`${import.meta.env.BASE_URL}Simunye_Sponsorship_OnePager.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-full border-2 border-white text-white hover:bg-white transition-all"
              onMouseEnter={e => { (e.currentTarget).style.color = '#10131A' }}
              onMouseLeave={e => { (e.currentTarget).style.color = '#fff' }}
            >
              Download One-Pager (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{ background: '#121E6B' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {statCards.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p
                  className="text-3xl sm:text-4xl text-white"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ fontFamily: "'Space Mono', monospace", color: '#A5B4FC', fontSize: '0.72rem', letterSpacing: '1px' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="What your sponsorship delivers."
            subtitle="Simunye is not a traditional sports club sponsorship. Here's the specific value we offer."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 hover:shadow-sm transition-all"
                style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg mb-3 card-heading" style={{ color: '#10131A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship packages teaser */}
      <section className="py-16 px-4" style={{ background: '#ECEEE7' }}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="Packages"
            title="Tailored to your goals."
            subtitle="We offer flexible sponsorship arrangements to match your brand objectives and budget. Download our one-pager for full details, or reach out directly to discuss what works for you."
            centered
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact?type=sponsor" variant="primary" size="lg">
              Start a Conversation
            </Button>
            <a
              href={`${import.meta.env.BASE_URL}Simunye_Sponsorship_OnePager.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-full border-2 transition-all"
              style={{ borderColor: '#2540E8', color: '#2540E8' }}
              onMouseEnter={e => (e.currentTarget).style.background = '#ECEEE7'}
              onMouseLeave={e => (e.currentTarget).style.background = 'transparent'}
            >
              Download One-Pager (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-4 text-center text-white"
        style={{ background: '#2540E8' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl mb-4" style={{ color: '#fff' }}>Ready to get involved?</h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            We'd love to have a conversation. Fill in a sponsorship enquiry and we'll be in touch within 48 hours.
          </p>
          <Button to="/contact?type=sponsor" variant="accent" size="lg">
            Enquire Now &rarr;
          </Button>
        </div>
      </section>
    </main>
  )
}
