import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Help() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Help Center</h1>
        <div className="space-y-16">
          <section className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-4">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">How do I create an account?</h3>
                <p className="text-gray-600">
                  To create an account, click on the <strong>Register</strong> button in the top right corner of the page. Fill out the required information and submit the form.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">How can I reset my password?</h3>
                <p className="text-gray-600">
                  If you have forgotten your password, click on the <strong>Forgot Password</strong> link on the login page. Follow the instructions sent to your email to reset your password.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">How do I list my products for sale?</h3>
                <p className="text-gray-600">
                  After logging in, navigate to your <strong>dashboard</strong> and click on <strong>Add Product</strong>. Fill out the product details and submit the form to list your product.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b pb-4">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              If you cannot find the answer to your question, please do not hesitate to contact our support team:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-600">
                <strong>Email:</strong> support@kisanmitra.com
              </li>
              <li className="text-gray-600">
                <strong>Phone:</strong> +91 1234567890
              </li>
              <li className="text-gray-600">
                <strong>Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
