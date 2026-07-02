import './ArenaSection.css'

const features = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 26 L16 4 L26 26" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 20 L23 20" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" /></svg>,
    title: 'Battle Arenas',
    description: 'Nine distinct battle arenas, each inspired by a Norse realm. From the frozen wastes of Niflheim to the fiery pits of Muspelheim.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="var(--gold)" strokeWidth="2" /><path d="M16 4 L16 28 M4 16 L28 16" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" /><circle cx="16" cy="16" r="5" stroke="var(--gold)" strokeWidth="1.5" /></svg>,
    title: 'Clan System',
    description: 'Form powerful clans with fellow warriors. Rise through the clan ranks and earn legendary titles bestowed by the Allfather himself.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 8 L16 4 L24 8 L24 20 L16 28 L8 20 Z" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" /><path d="M16 4 L16 28 M8 8 L24 20 M24 8 L8 20" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" opacity="0.5" /></svg>,
    title: 'Rune Crafting',
    description: 'Master the ancient art of rune inscription. Craft powerful runes to enhance your weapons, armor, and battle abilities.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 26 L16 6 L26 26 Z" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" fill="none" /><path d="M12 20 L16 6 L20 20" stroke="var(--gold)" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.6" /></svg>,
    title: 'Valhalla Path',
    description: 'Only the worthy shall feast in Valhalla. Complete legendary quests and ascend the Bifrost to claim your eternal glory.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4 L20 12 L28 13 L22 19 L24 28 L16 24 L8 28 L10 19 L4 13 L12 12 Z" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" /></svg>,
    title: 'Weekly Tournaments',
    description: 'Compete in weekly Mjolnir Tournaments. The victors earn legendary gear, rare runes, and undying fame across the nine realms.',
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="18" rx="2" stroke="var(--gold)" strokeWidth="2" /><path d="M10 4 L10 8 M22 4 L22 8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" /><path d="M4 14 L28 14" stroke="var(--gold)" strokeWidth="1.5" /><path d="M10 19 L14 19 M18 19 L22 19 M10 23 L14 23" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" /></svg>,
    title: 'Battle Chronicle',
    description: 'Every great battle is recorded in the sacred Chronicle. Relive your victories, learn from defeats, and build your legend.',
  },
]

export default function ArenaSection() {
  return (
    <section className="arena" id="arena">
      <div className="arena__container">
        <div className="arena__header">
          <p className="arena__eyebrow">The Nine Realms Await</p>
          <h2 className="arena__title">The Viking Owl Arena</h2>
          <div className="arena__ornament">
            <span />
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M12 0 L0 8 L12 16 L24 8 Z" fill="var(--gold)" opacity="0.4" />
              <path d="M12 3 L3 8 L12 13 L21 8 Z" fill="var(--gold)" opacity="0.6" />
              <circle cx="12" cy="8" r="2" fill="var(--gold)" />
            </svg>
            <span />
          </div>
          <p className="arena__description">
            A sacred battleground where warriors prove their mettle. Master every
            discipline and rise from a humble skald to an immortal Einherjar.
          </p>
        </div>

        <div className="arena__grid">
          {features.map((f, i) => (
            <div key={i} className="arena__card">
              <div className="arena__card-icon">{f.icon}</div>
              <h3 className="arena__card-title">{f.title}</h3>
              <p className="arena__card-desc">{f.description}</p>
              <div className="arena__card-corner arena__card-corner--tl" />
              <div className="arena__card-corner arena__card-corner--br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
