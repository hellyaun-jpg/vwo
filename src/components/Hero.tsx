import { ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const scrollToArena = () => document.querySelector('#arena')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__bg" style={{ backgroundImage: `url('https://images.pexels.com/photos/5370688/pexels-photo-5370688.jpeg?auto=compress&cs=tinysrgb&w=1920')` }} />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-line" />
          <span className="hero__badge-text">Est. in Battle</span>
          <span className="hero__badge-line" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-small">Viking Warrior</span>
          <span className="hero__title-large">OWL</span>
          <span className="hero__title-sub">ARENA</span>
        </h1>

        <p className="hero__description">
          Where ancient Norse wisdom meets modern combat. Rise through the ranks,
          forge alliances, and claim your place in the halls of glory.
        </p>

        <div className="hero__rune-divider">
          <span />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2 L10 18 M5 5 L10 2 L15 5 M5 15 L10 18 L15 15" stroke="var(--gold)" strokeWidth="1.5" />
          </svg>
          <span />
        </div>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}>
            Enter the Arena
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={() => document.querySelector('#warriors')?.scrollIntoView({ behavior: 'smooth' })}>
            Meet the Warriors
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">169</span>
            <span className="hero__stat-label">Warriors</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-number">142</span>
            <span className="hero__stat-label">Battles Fought</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-number">9</span>
            <span className="hero__stat-label">Realms</span>
          </div>
        </div>
      </div>

      <button className="hero__scroll-cue" onClick={scrollToArena} aria-label="Scroll down">
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
