'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ZoomIn, ZoomOut, Globe } from 'lucide-react'

const Header = () => {
  const [fontSize, setFontSize] = useState(16)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedFontSize = parseInt(localStorage.getItem('fontSize') || '16', 10)
    const savedLanguage = localStorage.getItem('language') || 'en'

    setFontSize(savedFontSize)
    setLanguage(savedLanguage)

    document.documentElement.style.fontSize = `${savedFontSize}px`
  }, [])

  const changeFontSize = (delta: number) => {
    const newSize = Math.max(12, Math.min(20, fontSize + delta))
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}px`
    localStorage.setItem('fontSize', newSize.toString())
  }

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    // In a real application, you would use a translation library here
  }

  return (
    <header className="text-white bg-transparent"> {/* Transparent header */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kisan Mitra
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => changeFontSize(1)}
            className="p-2 rounded-full hover:bg-green-700"
            aria-label="Increase font size"
          >
            <ZoomIn size={20} />
          </button>
          <button
            onClick={() => changeFontSize(-1)}
            className="p-2 rounded-full hover:bg-green-700"
            aria-label="Decrease font size"
          >
            <ZoomOut size={20} />
          </button>
          <div className="relative group">
            <button className="p-2 rounded-full hover:bg-green-700" aria-label="Change language">
              <Globe size={20} />
            </button>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
            </select>
          </div>
          <Link href="/bdashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/login" className="hover:underline">
            Logout
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
