import { Link } from 'react-router'
import logo from '../assets/logo.png'

const FOOTER_NAV_LINKS = [
  { label: 'Shop The Edit', path: 'shop-the-edit' },
  { label: 'New In', path: 'new-in' },
  { label: 'Bestsellers', path: 'bestsellers' },
  { label: 'About', path: 'about' },
  { label: 'Contact Us', path: 'contact' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', path: 'privacy-policy' },
  { label: 'Terms & Conditions', path: 'terms-and-conditions' },
]

function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-section-gap pt-20 pb-10 border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <img src={logo} alt="OFF SELF" className="h-12 w-auto mb-2 animate-fade-up" style={{ animationDelay: '0ms' }} />
            <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest animate-fade-up" style={{ animationDelay: '150ms' }}>
              WEAR WHAT FEELS LIKE YOU.
            </p>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-6 uppercase tracking-widest">
              Navigation
            </h3>
            <nav className="flex flex-col gap-4">
              {FOOTER_NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  className="font-nav-link text-nav-link text-on-surface-variant hover:text-on-surface group relative"
                  to={`/${link.path}`}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-6 uppercase tracking-widest">
              Social
            </h3>
            <nav className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  className="font-nav-link text-nav-link text-on-surface-variant hover:text-on-surface group"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-outline-variant/10">
          <div className="flex gap-8">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.path}
                className="font-label-caps text-[10px] text-on-surface-variant hover:text-on-surface uppercase"
                to={`/${link.path}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
            © 2026 OFF SELF
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
