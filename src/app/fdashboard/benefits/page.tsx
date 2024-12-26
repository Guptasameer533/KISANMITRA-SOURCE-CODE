import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBackground } from '@/components/PageBackground'

const benefits = [
  {
    title: 'Guaranteed Income',
    description: 'Secure a stable income with pre-agreed prices for your crops.',
    icon: '💰',
  },
  {
    title: 'Market Access',
    description: 'Gain direct access to buyers and expand your market reach.',
    icon: '🌐',
  },
  {
    title: 'Risk Mitigation',
    description: 'Reduce risks associated with price fluctuations and market uncertainties.',
    icon: '🛡️',
  },
  {
    title: 'Technical Support',
    description: 'Receive expert guidance and support throughout the growing season.',
    icon: '🔧',
  },
  {
    title: 'Quality Inputs',
    description: 'Access high-quality seeds, fertilizers, and other inputs at competitive prices.',
    icon: '🌱',
  },
  {
    title: 'Financial Services',
    description: 'Benefit from easier access to loans and other financial services.',
    icon: '🏦',
  },
]

export default function BenefitsPage() {
  return (
    <DashboardLayout>
      <PageBackground imageSrc="/resources/background3.jpeg" />
      <h1 className="text-3xl font-bold mb-6">Contract Benefits</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="mr-2 text-2xl">{benefit.icon}</span>
                {benefit.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{benefit.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
