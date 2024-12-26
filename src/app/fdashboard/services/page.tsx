import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PageBackground } from '@/components/PageBackground'

const services = [
  {
    title: 'Transportation',
    description: 'Reliable transportation services for your crops.',
    icon: '🚚',
  },
  {
    title: 'Storage Facilities',
    description: 'State-of-the-art storage solutions for your harvest.',
    icon: '🏭',
  },
  {
    title: 'Crop Insurance',
    description: 'Protect your crops against unforeseen circumstances.',
    icon: '🛡️',
  },
  {
    title: 'Equipment Rental',
    description: 'Rent modern farming equipment for improved efficiency.',
    icon: '🚜',
  },
  {
    title: 'Soil Testing',
    description: 'Professional soil analysis and recommendations.',
    icon: '🧪',
  },
  {
    title: 'Marketing Services',
    description: 'Expert help in marketing and selling your produce.',
    icon: '📊',
  },
]

export default function ServicesPage() {
  return (
    <DashboardLayout>
      <PageBackground imageSrc="/resources/background6.jpeg" />
      <h1 className="text-3xl font-bold mb-6">3rd Party Services</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 text-2xl">{service.icon}</span>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}

