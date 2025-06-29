import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Card, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: "An Introduction to Web Hosting",
    excerpt: "Learn the basics of web hosting, different types of hosting services, and what to look for when choosing a provider.",
    category: "Beginner Guide",
    readTime: "5 min read",
    date: "June 28, 2025",
    slug: "intro-to-web-hosting"
  },
  {
    id: 2,
    title: "Features to Look for in a Web Hosting Service",
    excerpt: "Discover the essential features every good web hosting service should offer, from security to performance.",
    category: "Guide",
    readTime: "7 min read",
    date: "June 27, 2025",
    slug: "web-host-features"
  },
  {
    id: 3,
    title: "Website Hosting vs. Website Builders",
    excerpt: "Understanding the difference between traditional web hosting and website builders to make the right choice.",
    category: "Comparison",
    readTime: "6 min read",
    date: "June 26, 2025",
    slug: "web-host-web-build"
  },
  {
    id: 4,
    title: "How to Choose the Best Website Hosting for Your Goals",
    excerpt: "A comprehensive guide to selecting the perfect hosting solution based on your specific needs and budget.",
    category: "Guide",
    readTime: "10 min read",
    date: "June 25, 2025",
    slug: "choose-hosting-goals"
  },
  {
    id: 5,
    title: "WordPress Hosting: What You Need to Know",
    excerpt: "Everything about WordPress hosting, from shared hosting to managed WordPress solutions.",
    category: "WordPress",
    readTime: "8 min read",
    date: "June 24, 2025",
    slug: "wordpress-hosting-guide"
  },
  {
    id: 6,
    title: "How to Buy a Domain and Launch Your Website",
    excerpt: "Step-by-step guide to purchasing a domain name and getting your website online quickly.",
    category: "Tutorial",
    readTime: "12 min read",
    date: "June 23, 2025",
    slug: "domain-launch-guide"
  }
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Web Hosting Articles & Guides
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert guides, tutorials, and insights to help you make informed decisions about web hosting,
                domains, and building your online presence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        <Link
                          href={`/articles/${article.slug}`}
                          className="hover:text-teal-600 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Popular Topics
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Web Hosting Basics", "WordPress", "Domain Names", "Website Builders", "E-commerce Hosting", "VPS Hosting", "Cloud Hosting", "SSL Certificates"].map((topic) => (
                <Badge key={topic} variant="outline" className="px-4 py-2 hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-colors">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
