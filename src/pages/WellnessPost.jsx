import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import wellnessPosts from '../data/wellness'
import Button from '../components/ui/Button'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function WellnessPost() {
  const { slug } = useParams()
  const post = wellnessPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="text-4xl mb-4" style={{ color: '#10131A' }}>Article not found.</h1>
        <p className="mb-8" style={{ color: '#565F6E' }}>That article doesn't seem to exist.</p>
        <Button to="/corporate-hub" variant="primary">Back to Corporate Hub</Button>
      </main>
    )
  }

  return (
    <main>
      {/* Cover */}
      <div className="w-full h-64 sm:h-80 overflow-hidden relative">
        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="mb-6 text-sm" style={{ color: '#565F6E' }}>
          <Link to="/corporate-hub" className="hover:underline" style={{ color: '#4E63EE' }}>Corporate Hub</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#565F6E' }}>Wellness Blog</span>
        </nav>

        {post.isSample && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
            This is a sample article for layout review purposes only.
          </div>
        )}

        <time className="text-sm" style={{ color: '#565F6E' }}>{formatDate(post.date)}</time>
        <h1 className="text-3xl sm:text-4xl mt-2 mb-8 leading-tight" style={{ color: '#10131A' }}>
          {post.title}
        </h1>

        <div className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(16,19,26,0.08)' }}>
          <Link to="/corporate-hub" className="text-sm font-bold hover:underline" style={{ color: '#2540E8' }}>
            &larr; Back to Corporate Hub
          </Link>
        </div>
      </article>
    </main>
  )
}
