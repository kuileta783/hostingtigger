import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/ui/button'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 