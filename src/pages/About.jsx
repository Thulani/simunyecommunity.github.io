import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import companies from '../data/companies'

const values = [
  {
    title: 'Unity',
    icon: '🤝',
    description: 'Simunye means "we are one" in isiZulu. On this court, your title, your company, and your background take a back seat. What matters is the team.',
  },
  {
    title: 'Inclusion',
    icon: '🌍',
    description: 'We rotate positions, welcome all experience levels, and actively recruit across industries and demographics. Anyone can join — no experience required.',
  },
  {
    title: 'Professionalism',
    icon: '⭐',
    description: 'We show up on time, we communicate clearly, and we represent our team with pride. The same standards that make great professionals make great teammates.',
  },
  {
    title: 'Community',
    icon: '💙',
    description: 'Our clinics, friendlies, and networker events are about more than netball. We\'re building a community of Sandton professionals who genuinely know each other.',
  },
]

export default function About() {
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
            About Simunye
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-6" style={{ color: '#fff' }}>
            We are one.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Simunye — from the isiZulu phrase meaning "we are one" — is more than a team name. It's the principle every player, every practice, and every event is built around.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Born in Sandton. Built for connection."
              />
              <p className="leading-relaxed mb-4" style={{ color: '#565F6E' }}>
                Simunye was founded in {2022} by a small group of professionals in Sandton who noticed something: despite working within a few kilometres of each other, they rarely had a reason to meet outside of formal business settings. Formal networking events were contrived. Drinks after work only reached the same small circles.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#565F6E' }}>
                Netball offered something different. A structured, physical, genuinely fun shared experience that broke down professional barriers in a way no business card ever could.
              </p>
              <p className="leading-relaxed" style={{ color: '#565F6E' }}>
                Four years later, Simunye draws players from over a dozen Sandton companies and runs practices, clinics, and friendly matches throughout the year. It remains proudly non-competitive — no league, no trophies, no pressure. Just great sport and great people.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/about/team-photo.png`}
                alt="The Simunye team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social initiative */}
      <section className="py-20 px-4" style={{ background: '#ECEEE7' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The Format"
            title="Social netball, done seriously."
            subtitle="We're intentionally non-competitive. Here's what that means in practice."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: '🏃', title: 'Practices', desc: 'Weekly Saturday morning sessions at Sandton Sports Club. All abilities welcome at every session.' },
              { icon: '🎯', title: 'Clinics', desc: 'Focused skill sessions on specific aspects of the game — shooting, defence, fitness, tactics — run by coaches.' },
              { icon: '🏆', title: 'Friendlies', desc: 'Informal matches against other corporate or social teams. Competitive on the day, friendly off the court.' },
              { icon: '🔄', title: 'Rotated Positions', desc: 'We actively encourage players to try different positions. No one is locked into a single role.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border"
                style={{ borderColor: 'rgba(37,64,232,0.12)' }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg mb-2 card-heading" style={{ color: '#10131A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Our Players Come From"
            title="Sandton's corporate community, on one court."
            subtitle="Players from these companies — and more — have chosen Simunye as their Saturday morning community."
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center rounded-xl border bg-white p-4 transition-colors"
                style={{ borderColor: 'rgba(16,19,26,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
                title={company.name}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ background: '#F5F6F1' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Our Values"
            title="What we stand for."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 border text-center transition-colors"
                style={{ borderColor: 'rgba(16,19,26,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3
                  className="text-xl mb-3 card-heading"
                  style={{ color: '#2540E8' }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl mb-4" style={{ color: '#10131A' }}>Sound like your kind of team?</h2>
          <p className="mb-6" style={{ color: '#565F6E' }}>We'd love to have you on the court. No experience required — just enthusiasm.</p>
          <Button to="/contact?type=join" variant="primary" size="lg">
            Register Your Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
