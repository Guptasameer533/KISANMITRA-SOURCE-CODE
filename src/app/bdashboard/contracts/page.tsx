import { Contract } from '../types'

async function getContracts(): Promise<Contract[]> {
  // In a real application, this would be an API call
  return [
    { id: 1, listingId: 1, croptype: 'Wheat', quantity: 1000, unit: 'kg', price: 500, status: 'pending' },
    { id: 2, listingId: 2, croptype: 'Rice', quantity: 2000, unit: 'kg', price: 750, status: 'finalized' },
  ]
}

export default async function Contracts() {
  const contracts = await getContracts()

  return (
    <div 
      className="min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/resources/background4.jpeg)' }} // Replace with your image URL
    >
      <div className="py-6">
        <h1 className="text-3xl font-bold mb-6 text-black">My Contracts</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Crop
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-black uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    {contract.croptype}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    {contract.quantity} {contract.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    ${contract.price}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-black">
                    {contract.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
