import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const enquiryTypes = [
  { value: 'join', label: 'Join the team' },
  { value: 'friendly', label: 'Request a friendly match' },
  { value: 'sponsor', label: 'Sponsorship enquiry' },
  { value: 'general', label: 'General enquiry' },
]

const initialState = {
  name: '',
  email: '',
  company: '',
  enquiryType: 'general',
  message: '',
  preferredDate: '',
  proposedVenue: '',
  budget: '',
}

const inputClass = 'w-full rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2'
const inputStyle = { border: '1px solid rgba(16,19,26,0.12)', '--tw-ring-color': '#2540E8' }

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const type = searchParams.get('type')
    if (type && enquiryTypes.find((t) => t.value === type)) {
      setForm((prev) => ({ ...prev, enquiryType: type }))
    }
  }, [searchParams])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl mb-4" style={{ color: '#10131A' }}>Message sent!</h1>
          <p className="mb-8 leading-relaxed" style={{ color: '#565F6E' }}>
            Thanks for reaching out. We'll get back to you within 48 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="px-6 py-3 text-sm font-bold rounded-full text-white transition-all hover:opacity-90"
            style={{ background: '#2540E8' }}
          >
            Send another message
          </button>
        </div>
      </main>
    )
  }

  const isFriendly = form.enquiryType === 'friendly'
  const isSponsor = form.enquiryType === 'sponsor'

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
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: '#fff' }}>Contact us.</h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}
          >
            Player enquiries, friendly match requests, sponsorship conversations — all in one place.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Send us a message." />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Enquiry type */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="enquiryType">
                What's this about? *
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={form.enquiryType}
                onChange={handleChange}
                required
                className={inputClass}
                style={inputStyle}
              >
                {enquiryTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="name">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="email">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.co.za"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="company">
                Company / Organisation
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Where do you work?"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* Friendly match fields */}
            {isFriendly && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl"
                style={{ background: '#ECEEE7', border: '1px solid rgba(37,64,232,0.12)' }}
              >
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="preferredDate">
                    Preferred date (optional)
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="proposedVenue">
                    Proposed venue (optional)
                  </label>
                  <input
                    id="proposedVenue"
                    name="proposedVenue"
                    type="text"
                    value={form.proposedVenue}
                    onChange={handleChange}
                    placeholder="e.g. Hyde Park Community Centre"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>
            )}

            {/* Sponsor budget */}
            {isSponsor && (
              <div
                className="p-4 rounded-xl"
                style={{ background: '#ECEEE7', border: '1px solid rgba(37,64,232,0.12)' }}
              >
                <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="budget">
                  Indicative budget range (optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="">Prefer not to say / Not sure yet</option>
                  <option value="under-10k">Under R10,000</option>
                  <option value="10k-25k">R10,000 – R25,000</option>
                  <option value="25k-50k">R25,000 – R50,000</option>
                  <option value="50k-plus">R50,000+</option>
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#10131A' }} htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={
                  form.enquiryType === 'join'
                    ? "Tell us a bit about yourself — your experience level, what brings you to Simunye, and when you're looking to start."
                    : form.enquiryType === 'friendly'
                    ? "Tell us about your team — how many players, experience level, and any other details that would help us plan the match."
                    : form.enquiryType === 'sponsor'
                    ? "Tell us about your company and what you're hoping to achieve through the partnership."
                    : "How can we help?"
                }
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </div>

            {/* Error state */}
            {status === 'error' && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 text-base font-bold rounded-full text-white transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: '#2540E8' }}
            >
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>

            <p className="text-xs text-center" style={{ color: '#565F6E' }}>
              We typically respond within 48 hours.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
