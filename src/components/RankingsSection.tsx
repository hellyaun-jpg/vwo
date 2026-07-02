import './RankingsSection.css'

const leaderboard = [
  { rank: 1, name: 'Grimwulf Ironhide', clan: 'Sons of Odin', cls: 'Berserker', wins: 247, realm: 'Asgard' },
  { rank: 2, name: 'Sigrid Valsdottir', clan: 'Shieldmaidens', cls: 'Valkyrie', wins: 231, realm: 'Vanaheim' },
  { rank: 3, name: 'Bjorn Skullsplitter', clan: 'Ravens Claw', cls: 'Berserker', wins: 218, realm: 'Midgard' },
  { rank: 4, name: 'Freyja Runebinder', clan: 'Seidr Circle', cls: 'Skald', wins: 204, realm: 'Vanaheim' },
  { rank: 5, name: 'Thorvald the Grim', clan: 'Sons of Odin', cls: 'Jarl', wins: 196, realm: 'Asgard' },
  { rank: 6, name: 'Hilda Frostweaver', clan: 'Frost Wolves', cls: 'Skald', wins: 187, realm: 'Niflheim' },
  { rank: 7, name: 'Ulfric Stormborn', clan: 'Sea Serpents', cls: 'Jarl', wins: 179, realm: 'Midgard' },
  { rank: 8, name: 'Astrid Owleye', clan: 'Night Owls', cls: 'Valkyrie', wins: 172, realm: 'Alfheim' },
]

const rankColors: Record<number, string> = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32' }

export default function RankingsSection() {
  return (
    <section className="rankings" id="rankings">
      <div className="rankings__container">
        <div className="rankings__header">
          <p className="rankings__eyebrow">Hall of Fame</p>
          <h2 className="rankings__title">Valhalla Rankings</h2>
          <div className="rankings__ornament">
            <span />
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
              <path d="M14 0 L0 9 L14 18 L28 9 Z" fill="var(--gold)" opacity="0.3" />
              <path d="M14 3 L4 9 L14 15 L24 9 Z" fill="var(--gold)" opacity="0.5" />
              <circle cx="14" cy="9" r="2.5" fill="var(--gold)" />
            </svg>
            <span />
          </div>
          <p className="rankings__desc">The mightiest warriors of the age. Their names are carved into the walls of Valhalla for eternity.</p>
        </div>

        <div className="rankings__podium">
          {([leaderboard[1], leaderboard[0], leaderboard[2]] as typeof leaderboard).map((w, i) => {
            const displayRank = i === 0 ? 2 : i === 1 ? 1 : 3
            return (
              <div key={w.rank} className={`rankings__podium-card rankings__podium-card--${displayRank}`}>
                <div className="rankings__podium-rank" style={{ color: rankColors[displayRank] }}>#{displayRank}</div>
                <div className="rankings__podium-avatar"><span>{w.name[0]}</span></div>
                <div className="rankings__podium-name">{w.name}</div>
                <div className="rankings__podium-class">{w.cls}</div>
                <div className="rankings__podium-wins">{w.wins}<span>victories</span></div>
              </div>
            )
          })}
        </div>

        <div className="rankings__table-wrap">
          <table className="rankings__table">
            <thead>
              <tr>
                <th>Rank</th><th>Warrior</th><th>Class</th><th>Clan</th><th>Realm</th><th>Victories</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(w => (
                <tr key={w.rank} className={w.rank <= 3 ? 'rankings__row--top' : ''}>
                  <td><span className="rankings__rank-num" style={{ color: rankColors[w.rank] || 'var(--text-muted)' }}>{w.rank <= 3 ? `#${w.rank}` : w.rank}</span></td>
                  <td>
                    <div className="rankings__warrior-cell">
                      <span className="rankings__warrior-avatar">{w.name[0]}</span>
                      <span className="rankings__warrior-name">{w.name}</span>
                    </div>
                  </td>
                  <td><span className="rankings__class-tag">{w.cls}</span></td>
                  <td className="rankings__clan">{w.clan}</td>
                  <td className="rankings__realm">{w.realm}</td>
                  <td><span className="rankings__wins">{w.wins}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rankings__view-all">
          <button className="rankings__view-btn">View Full Leaderboard</button>
        </div>
      </div>
    </section>
  )
}
