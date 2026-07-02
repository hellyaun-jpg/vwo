import { useState } from 'react'
import './WarriorsSection.css'

const warriors = [
  {
    name: 'Berserker', role: 'Frontline Warrior',
    image: 'https://images.pexels.com/photos/8733673/pexels-photo-8733673.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: "Wielders of uncontrollable fury. Berserkers channel Odin's rage to become unstoppable forces on the battlefield.",
    stats: { strength: 95, defense: 60, speed: 70, wisdom: 40 },
    rune: 'Isa', abilities: ['Rage Storm', 'Bear Form', 'Blood Frenzy'],
  },
  {
    name: 'Skald', role: 'Battle Poet',
    image: 'https://images.pexels.com/photos/8733678/pexels-photo-8733678.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Masters of runic magic and ancient song. Skalds inspire allies and weaken enemies with words of power older than time.',
    stats: { strength: 55, defense: 65, speed: 75, wisdom: 95 },
    rune: 'Ansuz', abilities: ['Battle Hymn', 'Rune Ward', 'Seidr Weave'],
  },
  {
    name: 'Valkyrie', role: 'Death Chooser',
    image: 'https://images.pexels.com/photos/8733677/pexels-photo-8733677.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Chosen servants of Odin who decide the fate of warriors. Valkyries move between realms with supernatural grace and precision.',
    stats: { strength: 80, defense: 75, speed: 90, wisdom: 70 },
    rune: 'Tiwaz', abilities: ['Soul Harvest', 'Bifrost Step', 'Shield Maiden'],
  },
  {
    name: 'Jarl', role: 'Chieftain',
    image: 'https://images.pexels.com/photos/8733679/pexels-photo-8733679.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Born leaders who command armies with iron will. Jarls excel in strategy and rally their clan to victory through superior tactics.',
    stats: { strength: 70, defense: 85, speed: 65, wisdom: 85 },
    rune: 'Othala', abilities: ['War Banner', 'Shield Wall', 'Command'],
  },
]

function StatBar({ value, label }: { value: number; label: string }) {
  return (
    <div className="warrior__stat">
      <div className="warrior__stat-header">
        <span className="warrior__stat-label">{label}</span>
        <span className="warrior__stat-value">{value}</span>
      </div>
      <div className="warrior__stat-bar">
        <div className="warrior__stat-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function WarriorsSection() {
  const [active, setActive] = useState(0)
  const w = warriors[active]

  return (
    <section className="warriors" id="warriors">
      <div className="warriors__container">
        <div className="warriors__header">
          <p className="warriors__eyebrow">Choose Your Path</p>
          <h2 className="warriors__title">Warrior Classes</h2>
          <p className="warriors__desc">Each class carries the blood of Norse legend. Choose your path wisely — it will define your destiny in the nine realms.</p>
        </div>

        <div className="warriors__tabs">
          {warriors.map((ww, i) => (
            <button key={i} className={`warriors__tab${active === i ? ' warriors__tab--active' : ''}`} onClick={() => setActive(i)}>
              <span className="warriors__tab-name">{ww.name}</span>
              <span className="warriors__tab-role">{ww.role}</span>
            </button>
          ))}
        </div>

        <div className="warriors__panel">
          <div className="warriors__image-wrap">
            <img key={active} src={w.image} alt={w.name} className="warriors__image" />
            <div className="warriors__image-overlay" />
            <div className="warriors__rune-badge">
              <span className="warriors__rune-label">Rune</span>
              <span className="warriors__rune-name">{w.rune}</span>
            </div>
          </div>

          <div className="warriors__info">
            <div className="warriors__class-badge">{w.role}</div>
            <h3 className="warriors__name">{w.name}</h3>
            <p className="warriors__description">{w.description}</p>
            <div className="warriors__abilities">
              <p className="warriors__abilities-label">Signature Abilities</p>
              <div className="warriors__ability-list">
                {w.abilities.map((a, i) => <span key={i} className="warriors__ability">{a}</span>)}
              </div>
            </div>
            <div className="warriors__stats">
              <StatBar value={w.stats.strength} label="Strength" />
              <StatBar value={w.stats.defense} label="Defense" />
              <StatBar value={w.stats.speed} label="Speed" />
              <StatBar value={w.stats.wisdom} label="Wisdom" />
            </div>
            <button className="warriors__select-btn">Choose {w.name}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
