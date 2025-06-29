import { Header } from '../components/Header'
import { AdvertisingDisclosure } from '../components/AdvertisingDisclosure'
import { HeroSection } from '../components/HeroSection'
import { HostingList } from '../components/HostingList'
import { ContentSections } from '../components/ContentSections'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AdvertisingDisclosure />
      <Header />
      <main>
        <HeroSection />

        {/* Main content with sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <HostingList />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>

        <ContentSections />
      </main>
      <Footer />
    </div>
  )
}
