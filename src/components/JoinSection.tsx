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
          <p className="join__desc">The ravens have spoken. The Allfather calls for warriors of extraordinary courage. Will you answer?</p>

          <div className="join__pillars">
            {[
              { label: 'Earn Glory', sub: 'Climb the ranks and claim legendary rewards' },
              { label: 'Join a Clan', sub: 'Fight alongside brothers and sisters in arms' },
              { label: 'Gain Power', sub: 'Unlock ancient runes and legendary abilities' },
            ].map(p => (
              <div key={p.label} className="join__pillar">
                <div className="join__pillar-dot" />
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
              <p>Your warrior's oath has been received. The Arena awaits — check your ravens (email) for next steps.</p>
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
                <label htmlFor="wname">Warrior Name</label>
                <input id="wname" type="text" placeholder="Enter your battle name" value={warriorName} onChange={e => setWarriorName(e.target.value)} required />
              </div>

              <div className="join__field">
                <label htmlFor="wemail">Raven Address (Email)</label>
                <input id="wemail" type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
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
