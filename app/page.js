// app/page.js

import SearchComponent from './components/Banner/SearchComponent'
import AIPowerSection from './components/AICapsLanding/AIPowerSection'
import TechnologySection from './components/landing/TechnologySection'
import PressReleases from './components/Other/PressReleases'
import VideoHero from './components/Other/VideoHero'
import ExploreSection from './components/ExploreSection/ExploreSection'
import OurScience from './components/Other/OurScience'
import StatsSection from './components/Other/StatsSection'
import Toast from './components/Snackbar/Toast';
import Footer from './components/layout/Footer/Footer'
import Navbar from './components/layout/Navbar/Navbar'

export default function Home() {
  return (
    <>
    <main>
    <div className="pt-[72px]">
          <Navbar />
        </div>
      <SearchComponent />
      <AIPowerSection />
      <TechnologySection />
      {/* <VideoHero /> */}
      <ExploreSection />
      {/* <OurScience /> */}
      {/* <StatsSection /> */}
      {/* <PressReleases /> */}
      <Footer />
    </main>
       <Toast />
       </>
  )
}

export const metadata = {
  title: 'Medvient',
  description: 'Medvient',
}