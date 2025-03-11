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

export async function GET(request: Request) {
  try {
    const email = request.headers.get('email') || '';

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const response = await fetch(`http://172.22.25.168:8001/a/${email}`);
    const farmerDetails = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: 'Failed to fetch farmer details' }, { status: 500 });
    }

    return NextResponse.json(farmerDetails);
  } catch (error) {
    console.error('Error fetching farmer details:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


