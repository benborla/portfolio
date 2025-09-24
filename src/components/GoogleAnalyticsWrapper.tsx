'use client'

import { Suspense } from 'react'
import { GoogleAnalyticsProvider } from './GoogleAnalyticsProvider'

interface GoogleAnalyticsWrapperProps {
  children: React.ReactNode
}

/**
 * Wrapper component that provides Suspense boundary for GoogleAnalyticsProvider
 * Required because useSearchParams() needs a Suspense boundary in Next.js 15
 */
export function GoogleAnalyticsWrapper({ children }: GoogleAnalyticsWrapperProps) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsProvider>{children}</GoogleAnalyticsProvider>
    </Suspense>
  )
}
