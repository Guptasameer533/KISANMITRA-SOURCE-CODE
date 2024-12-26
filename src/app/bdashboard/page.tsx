'use client'

import Link from 'next/link'
import MarketTrends from './components/MarketTrends'

export default function Dashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('/resources/background3.jpeg')",
        backgroundSize: 'cover', // Ensures the image covers the entire page
        backgroundRepeat: 'no-repeat', // Prevents tiling
      }}
    >
      <div className="flex-grow p-6 text-white">
        <h1
          className="text-5xl font-extrabold mb-6 text-white font-serif text-center"
          style={{
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Adds a blackish border effect
          }}
        >
          Buyers Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Marketplace"
            link="/bdashboard/marketplace"
            description="Browse available crop listings"
          />
          <DashboardCard
            title="My Interests"
            link="/bdashboard/interests"
            description="View your submitted interest forms"
          />
          <DashboardCard
            title="My Contracts"
            link="/bdashboard/contracts"
            description="Manage your finalized contracts"
          />
        </div>

        
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  link,
  description,
}: {
  title: string
  link: string
  description: string
}) {
  return (
    <Link
      href={link}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-gray-700">{description}</p>
    </Link>
  )
}
