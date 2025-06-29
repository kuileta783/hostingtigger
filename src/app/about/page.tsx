import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">About Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing the most accurate and up-to-date reviews on web hosting services to help you succeed online.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose lg:prose-xl mx-auto">
              <h2>Our Mission</h2>
              <p>
                Our mission is to simplify the process of choosing a web hosting provider. The internet is crowded with options, and our goal is to cut through the noise with clear, unbiased, and data-driven reviews. We believe that everyone, from individual bloggers to large enterprises, deserves a reliable and affordable home for their website.
              </p>
              
              <h2>Our Story</h2>
              <p>
                Founded in 2025, our team of tech enthusiasts and web developers grew tired of the paid promotions and misleading information that plague the hosting industry. We decided to build a platform where users could find honest assessments of hosting providers, based on real performance data, customer support experiences, and overall value.
              </p>

              <h2>How We Work</h2>
              <p>
                We spend hundreds of hours each month testing and re-testing hosting services to ensure our reviews are current and accurate. We sign up for accounts, run speed and uptime tests, and interact with customer support to give you a complete picture of what to expect. While we may earn a commission from some of the providers listed on our site, this does not influence our rankings or the content of our reviews. Our commitment is to our readers first.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 