'use client'

import { useState, useEffect } from 'react'

interface NewsItem {
  title: string
  description: string
  url: string
}

export default function MarketTrends() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news')
        const data = await response.json()
        setNews(data.articles.slice(0, 5))
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
  }, [])

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Market Trends</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-100 p-2 rounded">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

