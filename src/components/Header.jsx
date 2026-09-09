import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useCart } from '../context/cartUtils'
import { useFavorites } from '../context/favoritesUtils'
import SearchDrawer from './SearchDrawer'
import AccountDrawer from './AccountDrawer'
import FavoritesDrawer from './FavoritesDrawer'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Shop The Edit', path: 'shop-the-edit' },
  { label: 'New In', path: 'new-in' },
  { label: 'Bestsellers', path: 'bestsellers' },
  { label: 'About', path: 'about' },
  { label: 'Contact Us', path: 'contact' },
]

function Header() {
  const { openCart, totalItems } = useCart()
  const { openFavorites, totalFavorites } = useFavorites()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMenuOpenRef = useRef(isMobileMenuOpen)
  const location = useLocation()

  // Keep ref in sync with state
  useEffect(() => {
    isMenuOpenRef.current = isMobileMenuOpen
  }, [isMobileMenuOpen])

  // Close mobile menu on route change with a short delay so the fade-out animation plays
  useEffect(() => {
    if (isMenuOpenRef.current) {
      const t = setTimeout(() => setIsMobileMenuOpen(false), 50)
      return () => clearTimeout(t)
    }
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="h-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
          <div className="flex-1">
            <Link
              className="inline-block origin-left transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.08] hover:drop-shadow-lg active:scale-95"
              data-path="home"
              to="/"
            >
              <img src={logo} alt="OFF SELF" className="h-10 w-auto" />
            </Link>
          </div>
          <nav
            className="hidden lg:flex items-center gap-12 mr-8"
            data-active-classes="text-on-surface underline decoration-1 underline-offset-4"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                className={({ isActive }) =>
                  `font-nav-link text-nav-link hover:text-on-surface transition-colors uppercase ${
                    isActive
                      ? 'text-on-surface underline decoration-1 underline-offset-4'
                      : 'text-on-surface-variant'
                  }`
                }
                data-path={link.path}
                to={`/${link.path}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex-1 flex items-center justify-end gap-2 overflow-hidden">
            {/* Hamburger button — mobile only */}
            <button
              type="button"
              className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="material-symbols-outlined text-[22px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
            {/* Search button — mobile only */}
            <button
              type="button"
              className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            {/* Search icon — desktop only */}
            <button
              type="button"
              className="hidden lg:flex items-center justify-center w-10 h-10 text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <span className="material-symbols-outlined text-[22px]">
                search
              </span>
            </button>
            <button
              type="button"
              className="lg:hidden text-on-surface-variant hover:text-on-surface transition-colors"
              aria-label="Account"
              onClick={() => setIsAccountOpen(true)}
            >
              <span className="material-symbols-outlined text-[20px]">
                person
              </span>
            </button>
            <button
              type="button"
              className="relative text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
              aria-label="Favorites"
              onClick={openFavorites}
            >
              <span className="material-symbols-outlined text-[20px]">
                favorite_border
              </span>
              {totalFavorites > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary font-label-caps text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {totalFavorites}
                </span>
              )}
            </button>
            <button
              type="button"
              className="relative text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
              aria-label="Shopping bag"
              onClick={() => openCart(location.pathname)}
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_bag
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary font-label-caps text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile navigation drawer */}
      <nav
        className={`fixed top-20 left-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] lg:hidden ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              className={({ isActive }) =>
                `font-headline-md text-headline-md py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? 'text-on-surface bg-primary/10'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`
              }
              to={`/${link.path}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <AccountDrawer
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
      <FavoritesDrawerWrapper />
    </>
  )
}

function FavoritesDrawerWrapper() {
  const { isOpen, closeFavorites } = useFavorites()
  if (!isOpen) return null
  return <FavoritesDrawer onClose={closeFavorites} />
}

export default Header
