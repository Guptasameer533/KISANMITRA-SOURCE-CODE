// import { UserData } from 'next-auth/providers/42-school'
// import { UserInfo } from 'os'
import { useState, useEffect } from 'react'

interface ContractFinalizationPopupProps {
  interestId: number
  onClose: () => void
  onFinalize: () => void
}
interface FarmerDetails {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  crop: string;
  quantity: string;
  unit: string;
  price: string;
  expectedDelivery: string;
}


export default function ContractFinalizationPopup({ interestId, onClose, onFinalize }: ContractFinalizationPopupProps) {
  const [farmerDetails, setFarmerDetails] = useState<FarmerDetails | null>(null);

  // const [farmerDetails, setFarmerDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await fetch(`/api/farmer-details/${interestId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch farmer details')
        }
        const data = await response.json()
        setFarmerDetails(data)
        setLoading(false)
      } catch (error: unknown) {
        setError('Failed to load farmer details. Please try again.');
        setLoading(false)
        console.log(error)
      }
    }

    fetchFarmerDetails()
  }, [interestId])

  if (loading) {
    return <div className="text-center">Loading farmer details...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Farmer Details</h2>
        {farmerDetails && (
          <div>
            <p><strong>Name:</strong> {farmerDetails.name}</p>
            <p><strong>Location:</strong> {farmerDetails.location}</p>
            <p><strong>Crop:</strong> {farmerDetails.crop}</p>
            <p><strong>Quantity:</strong> {farmerDetails.quantity} {farmerDetails.unit}</p>
            <p><strong>Price:</strong> ₹{farmerDetails.price} per {farmerDetails.unit}</p>
            <p><strong>Expected Delivery:</strong> {farmerDetails.expectedDelivery}</p>
          </div>
        )}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onFinalize}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Finalize Contract
          </button>
        </div>
      </div>
    </div>
  )
}

