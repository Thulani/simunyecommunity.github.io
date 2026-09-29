import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import { Handshake, House, Star, Heart, Volleyball, Trophy, Mountain, UserPlus } from 'lucide-react'

const values = [
  {
    title: 'Unity',
    icon: Handshake,
    description: 'Simunye means "we are one" in isiZulu. It isn\'t just our name - it\'s our purpose. Whoever you are and wherever you work, on this court we are one team.',
  },
  {
    title: 'Belonging',
    icon: House,
    description: 'All ages, all genders, all skill levels. Whether it\'s your first time holding a netball or you\'re looking for a new home, there\'s a place for you here.',
  },
  {
    title: 'Consistency',
    icon: Star,
    description: 'Every Wednesday, we show up - for the game and for each other. Commitment, encouragement and accountability are how this community was built.',
  },
  {
    title: 'Giving Back',
    icon: Heart,
    description: 'As a registered NPO, we use sport to uplift the communities around us - from wellness initiatives to our Women\'s Month drive for two women\'s shelters.',
  },
]

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, #6B2D5C, #3B1633)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", color: '#E3C9DB', letterSpacing: '2px' }}
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
            Simunye - from the isiZulu phrase meaning "we are one" - is more than a team name. It's the principle every player, every practice, and every event is built around.
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
                title="Born from passion. Built on community."
              />
              <p className="leading-relaxed mb-4" style={{ color: '#565F6E' }}>
                Simunye's roots go back to August 2025, when players from three Sandton-based companies came together around a shared love of netball. As interest in individual company teams waned, a handful of committed players saw a gap: people who still wanted to play, compete and connect - just without the company lines.
              </p>
              <p className="leading-relaxed mb-4" style={{ color: '#565F6E' }}>
                So they united. What started with seven people on a Wednesday evening became Simunye Netball Community - named for the isiZulu phrase "we are one" - and grew to more than 20 members within its first three months.
              </p>
              <p className="leading-relaxed" style={{ color: '#565F6E' }}>
                Today Simunye is a registered, self-funded NPO. We train weekly at Discovery Sports Park in Parkmore, pay our own certified coaches from player contributions, and are steadily growing into a lifestyle community - with hikes, padel and wellness activities alongside the netball.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/photos/2026-07-one-community.jpg`}
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
            eyebrow="What We Do"
            title="Self-funded. Fully committed."
            subtitle="Social at heart, serious about showing up. Here's what that looks like."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Volleyball, title: 'Weekly Training', desc: 'Every Wednesday at 18:00 at Discovery Sports Park, Parkmore - coached sessions open to all abilities.' },
              { icon: Trophy, title: 'Tournaments', desc: 'We enter official netball tournaments, and in August 2026 hosted our very first Simunye tournament.' },
              { icon: Mountain, title: 'Beyond the Court', desc: 'Hikes, padel, running and wellness initiatives - netball is the heart of Simunye, but it\'s a lifestyle too.' },
              { icon: UserPlus, title: 'Open Membership', desc: 'Any passionate player is welcome, of any age, gender or skill level. No experience required.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border"
                style={{ borderColor: 'rgba(107,45,92,0.12)' }}
              >
                <IconTile icon={item.icon} className="mb-4" />
                <h3 className="text-lg mb-2 card-heading" style={{ color: '#10131A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#565F6E' }}>{item.desc}</p>
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
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(107,45,92,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
              >
                <IconTile icon={value.icon} size={56} className="mb-4" />
                <h3
                  className="text-xl mb-3 card-heading"
                  style={{ color: '#6B2D5C' }}
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
          <p className="mb-6" style={{ color: '#565F6E' }}>Join us on a Wednesday evening. No experience required - just good energy.</p>
          <Button to="/contact?type=join" variant="primary" size="lg">
            Register Your Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
