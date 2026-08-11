import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import newsPosts from '../data/news'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const sortedPosts = [...newsPosts].sort((a, b) => new Date(b.date) - new Date(a.date))

export default function News() {
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
            News
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>What's happening.</h1>
          <p
            className="text-lg"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Match recaps, team milestones, and everything in between.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow={`${sortedPosts.length} posts`} title="Latest news." />
          <div className="space-y-8">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  to={`/news/${post.slug}`}
                  className="flex flex-col sm:flex-row gap-6 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all p-0"
                  style={{ border: '1px solid rgba(16,19,26,0.08)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,64,232,0.25)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16,19,26,0.08)'}
                >
                  <div className="sm:w-64 shrink-0">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    {post.isSample && (
                      <span className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-2">Sample content</span>
                    )}
                    <time className="text-xs mb-2" style={{ color: '#565F6E' }}>{formatDate(post.date)}</time>
                    <h2
                      className="text-xl mb-3 card-heading transition-colors"
                      style={{ color: '#10131A' }}
                      onMouseEnter={e => (e.currentTarget).style.color = '#2540E8'}
                      onMouseLeave={e => (e.currentTarget).style.color = '#10131A'}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#565F6E' }}>{post.summary}</p>
                    <span className="text-sm font-bold" style={{ color: '#2540E8' }}>
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
