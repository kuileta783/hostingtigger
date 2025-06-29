import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function HowWeRankPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">How We Rank</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Transparency is critical to our mission. Here's a detailed look at how we review and rank hosting services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose lg:prose-xl mx-auto space-y-8">
              <div>
                <h2>1. Performance and Speed Testing</h2>
                <p>
                  We deploy a standard WordPress site on each hosting provider and use tools like GTmetrix and Pingdom to measure loading speeds from various locations worldwide. A fast website is crucial for user experience and SEO, so this carries significant weight in our scoring.
                </p>
              </div>
              
              <div>
                <h2>2. Uptime and Reliability Monitoring</h2>
                <p>
                  We monitor our test sites 24/7 using UptimeRobot to track any downtime. A reliable host should have an uptime of at least 99.9%. We track this over several months to ensure the data is accurate and reflects real-world performance.
                </p>
              </div>

              <div>
                <h2>3. Customer Support Quality</h2>
                <p>
                  We test each provider's customer support by asking a series of questions, ranging from simple to technical. We evaluate their response times, the expertise of the support staff, and the availability of different support channels (live chat, phone, email).
                </p>
              </div>

              <div>
                <h2>4. Features and Value for Money</h2>
                <p>
                  We analyze the features included in each plan, such as storage, bandwidth, free domains, SSL certificates, and security options. We then compare this to the price of the plan, including renewal rates, to determine the overall value.
                </p>
              </div>

              <div>
                <h2>5. User Reviews and Reputation</h2>
                <p>
                  Finally, we aggregate user reviews from trusted platforms like Trustpilot and G2. While our hands-on testing is primary, we also consider widespread customer feedback to identify common issues or praises.
                </p>
              </div>

               <div>
                <h2>Affiliate Disclosure</h2>
                <p>
                  To keep our site running and our content free, we may receive compensation from the companies featured on our site. However, this does not affect our rankings, which are based on our objective testing and analysis. Our commitment is to our readers.
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