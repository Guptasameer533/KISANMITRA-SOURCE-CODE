import { NextResponse } from 'next/server'
import {connectDB} from '@/lib/mongodb'
import Listing from '@/models/Listing'

export async function POST(request: Request) {
  try {
    const body = await request.json()  // Parse incoming JSON data

    // Connect to the database
    await connectDB()

    // Create a new listing
    const newListing = new Listing(body)

    // Save the listing
    await newListing.save()

    // Return a success response
    return NextResponse.json({ message: 'Listing created successfully' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 })
  }
}
