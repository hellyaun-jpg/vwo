import VwoLogo from './VwoLogo'
import './Footer.css'

const links = {
  Arena: ['Battle Arenas', 'Clan System', 'Rune Crafting', 'Valhalla Path'],
  Warriors: ['Berserker', 'Skald', 'Valkyrie', 'Jarl'],
  Community: ['Discord', 'Reddit', 'Twitch', 'YouTube'],
  Support: ['FAQ', 'Lore Library', 'Contact', 'Report a Foe'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rune-border" />
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <VwoLogo size={56} />
              <div>
                <div className="footer__brand-name">VWO</div>
                <div className="footer__brand-sub">Viking Warrior Owl</div>
              </div>
            </div>
            <p className="footer__brand-desc">A brotherhood forged in fire and ice. We honor the old ways while conquering new realms. Your saga starts here.</p>
            <div className="footer__socials">
              {['D', 'R', 'T', 'Y'].map((s, i) => (
                <button key={i} className="footer__social" aria-label="Social link">{s}</button>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className="footer__col">
              <h4 className="footer__col-title">{group}</h4>
              <ul className="footer__col-links">
                {items.map(item => (
                  <li key={item}><button className="footer__link">{item}</button></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__rune-row">
            {'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ'.split('').map((r, i) => (
              <span key={i} className="footer__rune">{r}</span>
            ))}
          </div>
          <div className="footer__legal">
            <span>&copy; {new Date().getFullYear()} VWO Viking Warrior Owl. All rights reserved.</span>
            <div className="footer__legal-links">
              <button className="footer__legal-link">Privacy</button>
              <span className="footer__legal-sep">|</span>
              <button className="footer__legal-link">Terms</button>
              <span className="footer__legal-sep">|</span>
              <button className="footer__legal-link">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
