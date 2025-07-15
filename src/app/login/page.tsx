"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const role = formData.get("role");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error as string);
    }

    if (res?.ok) {
      // Store the email in localStorage on successful login
      if (email) {
        localStorage.setItem("email", email as string); // Store the email in localStorage
        console.log("email stored success");
      }

      // Redirect to the dashboard based on role
      if (role === "farmer") {
        return router.push("/fdashboard");
      } else if (role === "buyer") {
        return router.push("/bdashboard");
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/resources/background3.jpeg"
          alt="Farm landscape"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Header */}
      <Header />

      <main className="flex items-center justify-center min-h-screen relative z-10">
        <div className="max-w-md w-full bg-white/90 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-2 text-black">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="farmer@example.com"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="space-y-2 text-black">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="space-y-2 text-black">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                required
                className="w-full py-2 px-3 border rounded-md text-gray-700"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="farmer">Farmer</option>
                <option value="buyer">Buyer</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Sign In
            </button>

            <div className="flex justify-between text-sm mt-4">
              <Link
                href="/forgot-password"
                className="text-blue-500 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
              <Link
                href="/register"
                className="text-green-500 hover:text-green-700"
              >
                Create Acc
              </Link>
            </div>
          </form>
          <div className="text-sm mt-4 text-black">
            <p className="font-semibold">Credentials for testing:</p>
            <p>
              ID: Tester23@gmail.com
            </p>
            <p>
              Password: 1234
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
