'use client'

import { useState, useEffect } from 'react'
import { Interest } from '../types'
import ContractFinalizationPopup from '../components/ContractFinalizationPopup'

export default function Interests() {
  const [interests, setInterests] = useState<Interest[]>([])
  const [selectedInterestId, setSelectedInterestId] = useState<number | null>(null)

  useEffect(() => {
    fetchInterests()
  }, [])

  const fetchInterests = async () => {
    // In a real application, this would be an API call
    const mockInterests: Interest[] = [
      { id: 1, listingId: 1, croptype: 'Wheat', status: 'pending' },
      { id: 2, listingId: 2, croptype: 'Rice', status: 'accepted' },
      { id: 3, listingId: 3, croptype: 'Corn', status: 'rejected' },
    ]
    setInterests(mockInterests)
  }

  const openContractFinalization = (interestId: number) => {
    setSelectedInterestId(interestId)
  }

  const closeContractFinalization = () => {
    setSelectedInterestId(null)
  }

  const finalizeContract = async () => {
    if (!selectedInterestId) return

    try {
      const response = await fetch('/api/finalize-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interestId: selectedInterestId }),
      })

      if (response.ok) {
        closeContractFinalization()
      } else {
        throw new Error('Failed to finalize contract')
      }
    } catch (error) {
      console.error('Error finalizing contract:', error)
      alert('Failed to finalize contract. Please try again.')
    }
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/resources/background4.jpeg)' }} // Add the image URL here
    >
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-6 text-black">My Interests</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Crop
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {interests.map((interest) => (
                <tr key={interest.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    {interest.croptype}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    {interest.status}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    {interest.status === 'accepted' && (
                      <button 
                        onClick={() => openContractFinalization(interest.id)}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Finalize Contract
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedInterestId && (
          <ContractFinalizationPopup
            interestId={selectedInterestId}
            onClose={closeContractFinalization}
            onFinalize={finalizeContract}
          />
        )}
      </div>
    </div>
  )
}
