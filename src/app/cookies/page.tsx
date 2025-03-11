import Image from 'next/image'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function CookiePolicy() {
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
        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose max-w-none">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Digital cookies concept"
              width={800}
              height={300}
              className="w-full rounded-lg mb-8"
            />
            <p>
              This Cookie Policy explains how KisanMitra uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2>What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>

            <h2>Why do we use cookies?</h2>
            <p>
              We use cookies for several reasons:
            </p>
            <ul>
              <li>To enable certain functions of the service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable ad delivery and behavioral advertising</li>
            </ul>

            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="Cookie preferences illustration"
              width={800}
              height={300}
              className="w-full rounded-lg my-8"
            />

            <h2>Types of cookies we use</h2>
            <p>
              We use the following types of cookies:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems.</li>
              <li><strong>Performance cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functionality cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests.</li>
            </ul>

            <h2>How can you control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>

            <h2>Changes to this Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>

            <h2>Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at cookies@kisanmitra.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

