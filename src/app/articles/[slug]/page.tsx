import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { Badge } from '../../../components/ui/badge'
import { articles } from '../page' // Assuming articles data is exported from the parent page
import Link from 'next/link'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

// Define a type for the article object for better type safety
type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article: Article | undefined = articles.find((a: Article) => a.slug === params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold">Article not found</h1>
          <p className="mt-4">The article you are looking for does not exist.</p>
          <Link href="/articles" className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-md">
            Back to Articles
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge variant="secondary">{article.category}</Badge>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                        {article.title}
                    </h1>
                    <div className="flex justify-center items-center space-x-4 mt-6 text-gray-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose lg:prose-xl">
            <p className="lead">{article.excerpt}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
            </p>
            <h2>Understanding the Core Concepts</h2>
            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.
            </p>
            <figure>
                <img src="https://via.placeholder.com/800x400" alt="Placeholder" className="rounded-lg"/>
                <figcaption>A placeholder image representing a key concept.</figcaption>
            </figure>
            <h2>Key Features to Consider</h2>
            <p>
                Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
            </p>
            <ul>
                <li><strong>Reliability:</strong> Look for a provider with a high uptime guarantee.</li>
                <li><strong>Speed:</strong> Fast loading times are crucial for user experience and SEO.</li>
                <li><strong>Support:</strong> 24/7 customer support can be a lifesaver.</li>
                <li><strong>Security:</strong> Features like SSL certificates and malware scanning are essential.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>
                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 