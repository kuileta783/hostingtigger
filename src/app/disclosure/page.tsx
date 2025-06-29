import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Advertising Disclosure</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              This page explains our affiliate relationships with hosting providers and how we generate revenue.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose lg:prose-xl mx-auto">
              <h2>Our Commitment to Honesty</h2>
              <p>
                We believe in being transparent about how we make money. Our website is a free resource, and to keep it that way, we may receive compensation from the companies whose services we review and recommend. This is commonly known as affiliate marketing.
              </p>
              
              <h2>How It Works</h2>
              <p>
                When you click on a link on our website that leads to a hosting provider and make a purchase, we may earn a commission. This comes at no extra cost to you. In fact, in many cases, we negotiate special deals and discounts for our readers.
              </p>

              <h2>Does This Affect Rankings?</h2>
              <p>
                Our affiliate relationships do not influence our reviews or rankings. Our rankings are the result of our rigorous and objective testing process, as detailed on our <a href="/how-we-rank">How We Rank</a> page. The compensation we receive helps us cover the costs of running this website, including paying our writers, developers, and for the hosting services we test.
              </p>

               <h2>Our Promise to You</h2>
              <p>
                Our primary goal is to provide you with valuable, accurate, and unbiased information. Your trust is our most important asset, and we would never compromise it for financial gain. The opinions expressed on this site are our own and are not influenced by our advertisers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 