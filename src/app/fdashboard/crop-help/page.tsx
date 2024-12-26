import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PageBackground } from '@/components/PageBackground'

const cropHelpTopics = [
  {
    title: 'Pest Control',
    description: 'Learn about common pests and how to control them effectively.',
    icon: '🐛',
  },
  {
    title: 'Soil Management',
    description: 'Understand soil types and how to maintain soil health.',
    icon: '🌱',
  },
  {
    title: 'Irrigation Techniques',
    description: 'Explore various irrigation methods for optimal water usage.',
    icon: '💧',
  },
  {
    title: 'Crop Rotation',
    description: 'Learn about the benefits and strategies for crop rotation.',
    icon: '🔄',
  },
]

export default function CropHelpPage() {
  return (
    <DashboardLayout>
      <PageBackground imageSrc="/resources/background4.jpeg" />
      <h1 className="text-3xl font-bold mb-6">Crop Help</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cropHelpTopics.map((topic, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 text-2xl">{topic.icon}</span>
                {topic.title}
              </CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

