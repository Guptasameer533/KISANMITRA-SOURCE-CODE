'use client'
import { useEffect, useState } from 'react'
import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Droplets, Sun, Thermometer } from 'lucide-react'
import { PageBackground } from '@/components/PageBackground'

// Define the types for the weather data returned by the API
interface CurrentConditions {
  temp: number;
  humidity: number;
  uvIndex: number;
  precip: number;
}

export default function WeatherPage() {
  // State for weather data, loading status, and error message
  const [weatherData, setWeatherData] = useState<CurrentConditions | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch the weather data when the component mounts
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/DELHI?unitGroup=metric&key=6HP2URR3VPQPDJRFSTSE5F2GH&contentType=json"
        )
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        const data = await response.json()
        setWeatherData(data.currentConditions)  // Using current conditions here
        setLoading(false)
      } catch (err: unknown) {
        // Type assertion for error handling
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [])

  // If data is still loading, show a loading state
  if (loading) {
    return (
      <DashboardLayout>
        <PageBackground imageSrc="/resources/background5.jpeg" />
        <h1 className="text-3xl font-bold mb-6">Weather Information</h1>
        <p>Loading...</p>
      </DashboardLayout>
    )
  }

  // If there's an error, show the error message
  if (error) {
    return (
      <DashboardLayout>
        <PageBackground imageSrc="/resources/background5.jpeg" />
        <h1 className="text-3xl font-bold mb-6">Weather Information</h1>
        <p>Error: {error}</p>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <PageBackground imageSrc="/resources/background5.jpeg" />
      <h1 className="text-3xl font-bold mb-6">Weather Information</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Temperature Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {/* Use optional chaining to avoid undefined error */}
            <div className="text-2xl font-bold">{weatherData?.temp}°C</div>
            <p className="text-xs text-muted-foreground">Feels like {weatherData?.temp ? weatherData.temp + 2 : "N/A"}°C</p>
          </CardContent>
        </Card>

        {/* Humidity Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weatherData?.humidity}%</div>
            <p className="text-xs text-muted-foreground">Moderate</p>
          </CardContent>
        </Card>

        {/* UV Index Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">UV Index</CardTitle>
            <Sun className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weatherData?.uvIndex}</div>
            <p className="text-xs text-muted-foreground">High</p>
          </CardContent>
        </Card>

        {/* Precipitation Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Precipitation</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weatherData?.precip}%</div>
            <p className="text-xs text-muted-foreground">Chance of rain</p>
          </CardContent>
        </Card>
      </div>
      {/* Optionally, you can add a weather forecast component here */}
    </DashboardLayout>
  )
}
