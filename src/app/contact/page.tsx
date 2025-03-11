// import Header from "@/components/layout/header"
// import Footer from "@/components/layout/footer"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// export default function Contact() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1 container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//             <p className="mb-4">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
//             <form className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" name="name" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" name="email" type="email" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea id="message" name="message" required rows={5} />
//               </div>
//               <Button type="submit">Send Message</Button>
//             </form>
//           </div>
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//             <div className="space-y-4">
//               <div>
//                 <h3 className="text-lg font-medium mb-2">Address</h3>
//                 <p>123 KisanMitra Street, Agri Tower</p>
//                 <p>New Delhi, 110001</p>
//                 <p>India</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2">Phone</h3>
//                 <p>+91 1234567890</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2">Email</h3>
//                 <p>info@kisanmitra.com</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium mb-2">Business Hours</h3>
//                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//                 <p>Saturday: 10:00 AM - 4:00 PM</p>
//                 <p>Sunday: Closed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   )
// }
"use client" 
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-black-50">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center text-white-800 mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                <Input id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <Input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                <Textarea id="message" name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <Button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </Button>
            </form>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">123 KisanMitra Street, Agri Tower</p>
                <p className="text-gray-600">New Delhi, 110001</p>
                <p className="text-gray-600">India</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@kisanmitra.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

