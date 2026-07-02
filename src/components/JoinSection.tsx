import { useState } from 'react'
import './JoinSection.css'

const classes = ['Berserker', 'Skald', 'Valkyrie', 'Jarl']

export default function JoinSection() {
  const [warriorName, setWarriorName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (warriorName && email && selectedClass) setSubmitted(true)
  }

  return (
    <section className="join" id="join">
      <div className="join__bg" style={{ backgroundImage: `url('https://images.pexels.com/photos/247537/pexels-photo-247537.jpeg?auto=compress&cs=tinysrgb&w=1920')` }} />
      <div className="join__overlay" />

      <div className="join__container">
        <div className="join__content">
          <p className="join__eyebrow">Your Saga Awaits</p>
          <h2 className="join__title">Forge Your Legend</h2>
          <p className="join__desc">The ravens have spoken. The Allfather calls for warriors of extraordinary courage. Will you answer? Join those already battling for eternal glory.</p>

          <div className="join__pillars">
            {[
              { label: 'Earn Glory', sub: 'Climb the ranks and claim legendary rewards', path: 'M12 2 L15 9 L22 10 L17 15 L18 22 L12 19 L6 22 L7 15 L2 10 L9 9 Z' },
              { label: 'Join a Clan', sub: 'Fight alongside brothers and sisters in arms', path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
              { label: 'Gain Power', sub: 'Unlock ancient runes and legendary abilities', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
            ].map(p => (
              <div key={p.label} className="join__pillar">
                <div className="join__pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={p.path} stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div className="join__pillar-text">
                  <strong>{p.label}</strong>
                  <span>{p.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="join__form-wrap">
          {submitted ? (
            <div className="join__success">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="var(--gold)" strokeWidth="2" />
                <path d="M14 24 L21 31 L34 17" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>The Gates Open, {warriorName}!</h3>
              <p>Your warrior's oath has been received. The Arena awaits. Check your ravens (email) for next steps.</p>
              <button className="join__success-btn" onClick={() => { setSubmitted(false); setWarriorName(''); setEmail(''); setSelectedClass('') }}>
                Register Another Warrior
              </button>
            </div>
          ) : (
            <form className="join__form" onSubmit={handleSubmit}>
              <div className="join__form-header">
                <h3>Take the Warrior's Oath</h3>
                <p>Your journey to Valhalla begins here</p>
              </div>

              <div className="join__field">
                <label htmlFor="warrior-name">Warrior Name</label>
                <input id="warrior-name" type="text" placeholder="Enter your battle name" value={warriorName} onChange={e => setWarriorName(e.target.value)} required />
              </div>

              <div className="join__field">
                <label htmlFor="warrior-email">Raven Address (Email)</label>
                <input id="warrior-email" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>

              <div className="join__field">
                <label>Choose Your Class</label>
                <div className="join__class-grid">
                  {classes.map(c => (
                    <button key={c} type="button" className={`join__class-btn${selectedClass === c ? ' join__class-btn--active' : ''}`} onClick={() => setSelectedClass(c)}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="join__submit" disabled={!warriorName || !email || !selectedClass}>
                Enter the Arena
              </button>

              <p className="join__disclaimer">By entering, you swear upon Mjolnir to uphold the Viking Code of Honor.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
