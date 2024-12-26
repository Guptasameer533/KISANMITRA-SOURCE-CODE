// import { NextResponse } from 'next/server'

// export async function GET(
//   request: Request,
//   { params }: { params: { interestId: string } }
// ) {
//   const interestId = params.interestId

//   // In a real application, you would fetch this data from your database
//   const mockFarmerDetails = {
//     name: 'John Doe',
//     location: 'Maharashtra, India',
//     crop: 'Wheat',
//     quantity: 1000,
//     unit: 'kg',
//     price: 25,
//     expectedDelivery: '2023-08-15',
//   }

//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   return NextResponse.json(mockFarmerDetails)
// }

import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { interestId: string } }
) {
  const { interestId } = params

  try {
    // Fetch the email (assuming it's passed as a query parameter or somehow accessible)
    const email = request.headers.get('email') || ''; // Replace with your actual way of getting the email

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 })
    }

    // Make the API request to fetch farmer details
    const response = await fetch(`http://172.22.25.168:8001/a/${email}`)
    const farmerDetails = await response.json()

    // Check if the response is successful
    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch farmer details' }, { status: 500 })
    }

    // Return the fetched data
    return NextResponse.json(farmerDetails)
  } catch (error) {
    console.error('Error fetching farmer details:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
