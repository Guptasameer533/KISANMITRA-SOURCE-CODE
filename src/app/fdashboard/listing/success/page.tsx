'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PageBackground } from '@/components/PageBackground'

export default function SuccessPage() {
  return (
    <DashboardLayout>
      <PageBackground imageSrc="/new-listing-background.jpg" />
      <Card>
        <CardHeader>
          <CardTitle>Congratulations!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your listing has been successfully submitted.</p>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
