import { useState, useEffect } from 'react';
import { Menu, X, Twitter, ChevronDown, Sword, Shield, Trophy, Coins, Users, Zap, Star, ArrowRight, Gamepad2, Clock } from 'lucide-react';

const TWITTER_URL = 'https://x.com/Vikingowll';

function UnderDevToast({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-[fadeSlideDown_0.3s_ease_forwards]">
      <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-yellow-500/30 shadow-[0_8px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(234,179,8,0.1)] backdrop-blur-xl">
        <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
          <Clock size={16} className="text-yellow-400" />
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold tracking-wide">Under Development</span>
          <span className="text-gray-500 text-xs">The arena is being forged. Stay tuned, warrior.</span>
        </div>
        <button onClick={onClose} className="ml-2 text-gray-600 hover:text-gray-300 transition-colors">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Battle', href: '#battle' },
    { label: 'Token', href: '#token' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <>
    {showToast && <UnderDevToast onClose={() => setShowToast(false)} />}
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/photo_2026-06-29_23-38-43.jpg"
              alt="VWO Logo"
              className="w-10 h-10 rounded-full object-cover border border-yellow-500/50 group-hover:border-yellow-400 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-yellow-400 font-black tracking-[0.2em] text-sm">VWO</span>
            <span className="text-gray-500 text-[9px] tracking-[0.15em] uppercase">Viking Owl Arena</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-yellow-400 tracking-wider uppercase transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 p-2"
          >
            <Twitter size={18} />
          </a>
          <button
            onClick={() => setShowToast(true)}
            className="inline-flex items-center gap-2 px-5 py-2 border border-yellow-500/40 text-yellow-400 text-sm font-bold tracking-wider uppercase rounded hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
          >
            <Gamepad2 size={14} />
            Play Viking Owl
          </button>
          <a
            href="#battle"
            className="group relative px-5 py-2 bg-yellow-500 text-black text-sm font-black tracking-wider uppercase rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] hover:scale-[1.03]"
          >
            <span className="relative z-10">Enter Arena</span>
            <div className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-yellow-400 tracking-widest uppercase text-sm transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm transition-colors"
          >
            <Twitter size={16} /> Twitter
          </a>
          <button
            onClick={() => { setShowToast(true); setOpen(false); }}
            className="flex items-center justify-center gap-2 px-5 py-3 border border-yellow-500/40 text-yellow-400 font-bold tracking-wider uppercase rounded text-sm"
          >
            <Gamepad2 size={15} />
            Play Viking Owl
          </button>
          <a
            href="#battle"
            onClick={() => setOpen(false)}
            className="px-5 py-3 bg-yellow-500 text-black font-black tracking-wider uppercase rounded text-center"
          >
            Enter Arena
          </a>
        </div>
      )}
    </header>
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Banner image — fixed height, natural proportions */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] mt-16">
        <img
          src="/photo_2026-06-30_01-28-56.jpg"
          alt="Viking Warrior Owl"
          className="w-full h-full object-cover object-center"
        />
        {/* Top fade for navbar blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />
        {/* Bottom fade into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-transparent pointer-events-none" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,6,6,0.5),transparent_20%,transparent_80%,rgba(6,6,6,0.5))] pointer-events-none" />
      </div>

      {/* Text + CTA below the banner */}
      <div className="flex flex-col items-center text-center px-6 pb-20 pt-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/70" />
          <span className="text-yellow-400/90 text-xs tracking-[0.3em] uppercase font-semibold">
            169 Warriors Awakened
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/70" />
        </div>

        <p className="max-w-lg text-gray-400 text-base md:text-lg leading-relaxed mb-10">
          Enter the ancient battlefield where warrior owls clash for supremacy. Battle, earn, and rise to become a legendary champion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#battle"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-black tracking-wider uppercase text-sm rounded overflow-hidden hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sword size={16} />
              Enter Owl Arena
            </span>
            <div className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-500/40 text-yellow-400 font-bold tracking-wider uppercase text-sm rounded hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
          >
            View Roadmap
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 text-gray-700">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center gap-2 px-8 py-6 border border-yellow-500/10 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-yellow-500/30 transition-all duration-300 group">
      <Icon size={20} className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-xs text-gray-500 tracking-widest uppercase">{label}</span>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="relative py-16 border-y border-yellow-500/10 bg-black/40">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="169" label="Warriors" icon={Users} />
        <StatCard value="PvP" label="Battle Mode" icon={Sword} />
        <StatCard value="VWO" label="Token" icon={Coins} />
        <StatCard value="4" label="Phases" icon={Trophy} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image + decorative */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_70%)]" />
          <div className="relative">
            <div className="absolute -inset-4 border border-yellow-500/10 rounded-2xl" />
            <div className="absolute -inset-8 border border-yellow-500/5 rounded-3xl" />
            <img
              src="/photo_2026-06-29_23-38-43.jpg"
              alt="Viking Owl Warrior"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border border-yellow-500/20 shadow-[0_0_80px_rgba(234,179,8,0.15)] relative z-10"
            />
            {/* Corner runes */}
            <div className="absolute -top-4 -left-4 text-yellow-500/30 text-2xl font-black">ᚠ</div>
            <div className="absolute -bottom-4 -right-4 text-yellow-500/30 text-2xl font-black">ᚱ</div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-yellow-500/60" />
            <span className="text-yellow-500/80 text-xs tracking-[0.3em] uppercase">The Lore</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Rise of the<br />
            <span className="shimmer-text">Owl Warriors</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            In the ancient realm of Asgard, 169 warrior owls were forged by Odin himself — each bearing sacred runes, battle scars, and the fury of a thousand storms. These are not mere creatures; they are legends incarnate.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Viking Owl Arena is a PvP battle universe where warriors clash in the eternal arena, earning VWO tokens through skill, strategy, and sheer dominance. The weak fall. The worthy ascend.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { icon: Shield, text: '169 unique warrior owls, each with distinct battle traits' },
              { icon: Sword, text: 'Real-time PvP battles with on-chain rewards' },
              { icon: Zap, text: 'Earn VWO tokens through arena victories' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-gray-300">
                <Icon size={14} className="text-yellow-500 shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BattleFeature({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="group p-8 border border-yellow-500/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-yellow-500/30 transition-all duration-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.06)] flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center group-hover:border-yellow-500/40 group-hover:bg-yellow-500/10 transition-all duration-300">
        <Icon size={20} className="text-yellow-400" />
      </div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function BattleSection() {
  return (
    <section id="battle" className="relative py-28 px-6 bg-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(234,179,8,0.04),transparent_80%)]" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/60" />
            <span className="text-yellow-500/80 text-xs tracking-[0.3em] uppercase">The Arena</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            How Warriors <span className="shimmer-text">Battle</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Every match is a test of tactics. Every victory earns real rewards. Every defeat fuels the hunger to rise again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BattleFeature
            icon={Users}
            title="Choose Your Warrior"
            desc="Select from 169 uniquely-forged Viking owl warriors, each with their own rune abilities, armor, and battle statistics."
          />
          <BattleFeature
            icon={Sword}
            title="PvP Combat"
            desc="Enter ranked matches against other warriors. Deploy strategy and rune power to outlast your opponent in the arena."
          />
          <BattleFeature
            icon={Coins}
            title="Earn VWO Tokens"
            desc="Victory is rewarded. Every battle win earns you VWO tokens redeemable within the ecosystem."
          />
        </div>
      </div>
    </section>
  );
}

function TokenSection() {
  return (
    <section id="token" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent p-12 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-2xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-yellow-500/60" />
                <span className="text-yellow-500/80 text-xs tracking-[0.3em] uppercase">The Currency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                The <span className="shimmer-text">VWO Token</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                VWO is the lifeblood of the Viking Owl Arena ecosystem. Earned through battle and spent on power — the token connects every warrior, every match, and every victory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Battle Rewards', icon: Trophy },
                  { label: 'Arena Entry', icon: Sword },
                  { label: 'Power Upgrades', icon: Zap },
                  { label: 'Tournaments', icon: Star },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-sm text-gray-300"
                  >
                    <Icon size={14} className="text-yellow-500 shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl scale-150" />
                <div className="relative w-48 h-48 rounded-full border-2 border-yellow-500/40 bg-black/60 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.2)] hover:shadow-[0_0_80px_rgba(234,179,8,0.3)] transition-shadow duration-500">
                  <Coins size={40} className="text-yellow-400 mb-2" />
                  <span className="text-3xl font-black text-yellow-400">VWO</span>
                  <span className="text-xs text-gray-500 tracking-widest uppercase mt-1">Token</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  {
    num: '01',
    title: 'AWAKENING',
    status: 'Active',
    active: true,
    items: ['Game design & lore', 'Warrior owl system', 'Community building', 'Whitepaper release'],
  },
  {
    num: '02',
    title: 'THE FORGE',
    status: 'Upcoming',
    active: false,
    items: ['PvP prototype launch', 'NFT integration', 'Closed beta testing', 'Token generation'],
  },
  {
    num: '03',
    title: 'BATTLE RISES',
    status: 'Upcoming',
    active: false,
    items: ['Play-to-Earn live', 'Ranked matchmaking', 'Seasonal rewards', 'Marketplace launch'],
  },
  {
    num: '04',
    title: 'LEGEND WAR',
    status: 'Upcoming',
    active: false,
    items: ['Full public launch', 'Grand tournaments', 'Expansion packs', 'Cross-chain bridges'],
  },
];

function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 px-6 bg-black/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(234,179,8,0.04),transparent_70%)]" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/60" />
            <span className="text-yellow-500/80 text-xs tracking-[0.3em] uppercase">The Journey</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Battle <span className="shimmer-text">Roadmap</span>
          </h2>
        </div>

        {/* Timeline connector on desktop */}
        <div className="hidden md:block absolute left-1/2 top-56 bottom-28 w-px bg-gradient-to-b from-yellow-500/40 via-yellow-500/10 to-transparent" />

        <div className="grid md:grid-cols-2 gap-6 relative">
          {PHASES.map((phase, i) => (
            <div
              key={phase.num}
              className={`group relative p-8 rounded-2xl border transition-all duration-400 ${
                phase.active
                  ? 'border-yellow-500/50 bg-yellow-500/5 shadow-[0_0_40px_rgba(234,179,8,0.08)]'
                  : 'border-yellow-500/10 bg-white/[0.02] hover:border-yellow-500/25 hover:bg-white/[0.03]'
              }`}
            >
              {phase.active && (
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    Live
                  </span>
                </div>
              )}
              <div className="flex items-start gap-5">
                <div className={`text-5xl font-black leading-none ${phase.active ? 'text-yellow-500/60' : 'text-gray-800'}`}>
                  {phase.num}
                </div>
                <div className="flex-1">
                  <h3 className={`font-black text-xl tracking-wider mb-4 ${phase.active ? 'text-yellow-400' : 'text-gray-300'}`}>
                    PHASE {phase.num} — {phase.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className={`w-1 h-1 rounded-full shrink-0 ${phase.active ? 'bg-yellow-500' : 'bg-gray-700'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(234,179,8,0.07),transparent_70%)]" />
      <div className="max-w-3xl mx-auto text-center relative">
        <div className="mb-4">
          <img
            src="/photo_2026-06-29_23-38-43.jpg"
            alt="Viking Owl"
            className="w-20 h-20 rounded-full object-cover mx-auto border border-yellow-500/40 shadow-[0_0_40px_rgba(234,179,8,0.2)] mb-8 logo-glow"
          />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Are You Ready to<br />
          <span className="shimmer-text">Enter the Arena?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          169 warriors. One arena. Only the strongest survive. Join the Viking Owl community and claim your destiny.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black font-black tracking-wider uppercase text-sm rounded hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:scale-[1.03] transition-all duration-300 overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Twitter size={16} />
              Join on Twitter
            </span>
            <div className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-500/40 text-yellow-400 font-bold tracking-wider uppercase text-sm rounded hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
          >
            View Roadmap
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/photo_2026-06-29_23-38-43.jpg"
            alt="VWO"
            className="w-8 h-8 rounded-full object-cover border border-yellow-500/30"
          />
          <span className="text-yellow-500 font-black tracking-[0.2em] text-sm">VWO</span>
          <span className="text-gray-700 text-xs tracking-wider">Viking Owl Arena</span>
        </div>
        <div className="flex items-center gap-8">
          {['About', 'Battle', 'Token', 'Roadmap'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs text-gray-600 hover:text-yellow-500 tracking-wider uppercase transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-500 transition-colors"
          >
            <Twitter size={16} />
          </a>
          <span className="text-gray-700 text-xs">&copy; 2025 Viking Owl Arena</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#060606] text-white antialiased">
      <NavBar />
      <Hero />
      <StatsBar />
      <About />
      <BattleSection />
      <TokenSection />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  );
}
