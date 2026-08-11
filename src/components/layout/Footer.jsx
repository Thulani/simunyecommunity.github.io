import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#121E6B' }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <img
                src={`${import.meta.env.BASE_URL}simunye-logo.png`}
                alt="Simunye Netball Hub"
                className="h-10 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.72)' }} className="text-sm leading-relaxed max-w-sm">
              A mixed corporate social netball team in Sandton, Gauteng. We bring professionals together through the sport of netball — no league, no pressure, just community.
            </p>
            <p className="mt-3 text-xs italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              "Simunye" — we are one.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3
              className="text-sm uppercase tracking-wider mb-3 mono"
              style={{ color: '#FF3E7F', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem' }}
            >
              Explore
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/schedule', label: 'Schedule' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/news', label: 'News' },
                { to: '/education', label: 'Education Centre' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.72)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-sm uppercase tracking-wider mb-3 mono"
              style={{ color: '#FF3E7F', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem' }}
            >
              Connect
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/corporate-hub', label: 'Corporate Hub' },
                { to: '/sponsors', label: 'Sponsors' },
                { to: '/contact?type=join', label: 'Join the Team' },
                { to: '/contact?type=sponsor', label: 'Become a Sponsor' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.72)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Simunye Netball Hub. Sandton, Gauteng.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}Simunye_Sponsorship_OnePager.pdf`}
            className="text-xs hover:text-white underline transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Sponsorship One-Pager (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
