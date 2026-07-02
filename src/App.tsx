import Header from './components/Header'
import Hero from './components/Hero'
import ArenaSection from './components/ArenaSection'
import WarriorsSection from './components/WarriorsSection'
import RankingsSection from './components/RankingsSection'
import JoinSection from './components/JoinSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ArenaSection />
        <WarriorsSection />
        <RankingsSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
