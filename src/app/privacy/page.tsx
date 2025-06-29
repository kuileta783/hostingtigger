import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-xl">
          <h1>Privacy Policy</h1>
          <p className="lead">
            Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
          </p>
          <p>
            We may collect information like your name, email address, and browsing activity on our site.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2>3. Log Files</h2>
          <p>
            We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2>4. Cookies and Web Beacons</h2>
          <p>
            Like any other website, we use 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2>5. Third-Party Privacy Policies</h2>
          <p>
            Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>

          <h2>6. Your Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 