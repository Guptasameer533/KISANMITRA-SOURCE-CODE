import Image from 'next/image'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/farm-background.jpg"
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg text-gray-950">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose max-w-none">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Farmers in a field"
              width={800}
              height={300}
              className="w-full rounded-lg mb-8"
            />
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using KisanMitra services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              KisanMitra provides a platform for farmers and buyers to engage in smart contract farming. Our services include but are not limited to facilitating transactions, providing market information, and offering tools for crop management.
            </p>

            <h2>3. User Obligations</h2>
            <p>
              Users of KisanMitra agree to:
            </p>
            <ul>
              <li>Provide accurate and up-to-date information</li>
              <li>Use the platform for lawful purposes only</li>
              <li>Respect the rights of other users and third parties</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Digital farming concept"
              width={800}
              height={300}
              className="w-full rounded-lg my-8"
            />

            <h2>4. Intellectual Property</h2>
            <p>
              All content and materials available on KisanMitra, including but not limited to text, graphics, website name, code, images and logos are the intellectual property of KisanMitra and are protected by applicable copyright and trademark law.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              KisanMitra shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes to these Terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

