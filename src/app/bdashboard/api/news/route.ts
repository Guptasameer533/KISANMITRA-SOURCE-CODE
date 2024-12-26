import { NextResponse } from 'next/server'

export async function GET() {
  const url = `https://newsapi.org/v2/everything?q=agriculture&apiKey=3c3fd33effe944b4b0964bfc15c4e663`

  try {
    const response = await fetch(url)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

