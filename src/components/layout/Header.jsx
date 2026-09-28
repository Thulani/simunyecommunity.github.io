import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SHOW_CORPORATE_HUB } from '../../config/features'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News' },
  { to: '/education', label: 'Education' },
  ...(SHOW_CORPORATE_HUB ? [{ to: '/corporate-hub', label: 'Corporate Hub' }] : []),
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(245,246,241,0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderColor: 'rgba(16,19,26,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={`${import.meta.env.BASE_URL}simunye-logo.png`}
              alt="Simunye Netball Community"
              className="h-9 w-auto object-contain"
            />
            <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '1.05rem', letterSpacing: '0.5px', color: '#6B2D5C' }}>
              Simunye
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'hover:text-ink'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: '#6B2D5C', color: '#fff' }
                    : { color: '#565F6E' }
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact?type=join"
              className="px-5 py-2 text-sm font-bold rounded-full border-2 transition-all"
              style={{ borderColor: '#6B2D5C', color: '#6B2D5C' }}
            >
              Join Us
            </Link>
            <Link
              to="/contact?type=sponsor"
              className="px-5 py-2 text-sm font-bold rounded-full text-[#3B1633] transition-all hover:opacity-90"
              style={{ background: '#E0A43A' }}
            >
              Sponsor Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md"
            style={{ color: '#565F6E' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-4 py-3 space-y-1"
          style={{ background: '#F5F6F1', borderColor: 'rgba(16,19,26,0.08)' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : ''
                }`
              }
              style={({ isActive }) =>
                isActive
                  ? { background: '#6B2D5C', color: '#fff' }
                  : { color: '#565F6E' }
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/contact?type=join"
              className="block text-center px-4 py-2 text-sm font-bold rounded-full border-2"
              style={{ borderColor: '#6B2D5C', color: '#6B2D5C' }}
              onClick={() => setMenuOpen(false)}
            >
              Join Us
            </Link>
            <Link
              to="/contact?type=sponsor"
              className="block text-center px-4 py-2 text-sm font-bold rounded-full text-[#3B1633]"
              style={{ background: '#E0A43A' }}
              onClick={() => setMenuOpen(false)}
            >
              Sponsor Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
