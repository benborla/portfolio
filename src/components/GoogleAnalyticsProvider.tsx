'use client'

import { useEffect, useMemo } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/google-analytics'

interface GoogleAnalyticsProviderProps {
  children: React.ReactNode
  debounceMs?: number
}

/**
 * Debounce function for route changes
 */
function debounce(
  func: (url: string) => void,
  wait: number
): (url: string) => void {
  let timeout: NodeJS.Timeout | null = null

  return (url: string) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(url), wait)
  }
}

export function GoogleAnalyticsProvider({
  children,
  debounceMs = 100
}: GoogleAnalyticsProviderProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Debounced page view tracking
  const debouncedTrackPageView = useMemo(
    () => debounce(trackPageView, debounceMs),
    [debounceMs]
  )

  // Track page views on route changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (process.env.NODE_ENV !== 'production') return

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    debouncedTrackPageView(url)
  }, [pathname, searchParams, debouncedTrackPageView])

  return <>{children}</>
}
