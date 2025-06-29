import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HostingCard } from '../../components/HostingCard'
import { hostingProviders } from '../../data/hostingProviders'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Web Hosting Reviews
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read our comprehensive reviews of the top web hosting providers.
                We test speed, uptime, customer support, and value to help you make the best choice.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {hostingProviders.map((provider, index) => (
                <HostingCard
                  key={provider.id}
                  provider={provider}
                  isEditorChoice={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How We Review Web Hosting Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">Speed Tests</h3>
                <p className="text-sm text-gray-600">
                  We test loading speeds from multiple global locations
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold">Uptime Monitoring</h3>
                <p className="text-sm text-gray-600">
                  24/7 monitoring to track reliability and downtime
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold">Support Quality</h3>
                <p className="text-sm text-gray-600">
                  Testing response times and expertise of support teams
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold">Value Analysis</h3>
                <p className="text-sm text-gray-600">
                  Comparing features, pricing, and renewal costs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
