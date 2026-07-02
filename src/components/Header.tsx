import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import VwoLogo from './VwoLogo'
import './Header.css'

const navLinks = [
  { label: 'Arena', href: '#arena' },
  { label: 'Warriors', href: '#warriors' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Join', href: '#join' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <VwoLogo />
          <div className="header__brand-text">
            <span className="header__brand-vwo">VWO</span>
            <span className="header__brand-sub">VIKING OWL ARENA</span>
          </div>
        </a>

        <nav className="header__nav">
          {navLinks.map(link => (
            <button key={link.href} className="header__nav-link" onClick={() => handleNav(link.href)}>
              {link.label}
            </button>
          ))}
          <button className="header__cta" onClick={() => handleNav('#join')}>Enter Arena</button>
        </nav>

        <button className="header__menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile-nav">
          {navLinks.map(link => (
            <button key={link.href} className="header__mobile-link" onClick={() => handleNav(link.href)}>
              {link.label}
            </button>
          ))}
          <button className="header__cta header__cta--mobile" onClick={() => handleNav('#join')}>Enter Arena</button>
        </div>
      )}
    </header>
  )
}
