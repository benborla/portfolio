/**
 * Google Analytics utility functions
 * Centralized analytics logic for consistent usage across the application
 */

import type {
  WindowWithGoogleAnalytics,
  GtagConfig,
  GtagEventParams
} from '@/types/google-analytics'

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Initialize Google Analytics global objects
 * This should only be called once in the application
 */
export const initializeGoogleAnalytics = (): void => {
  if (typeof window === 'undefined') return

  const win = window as unknown as WindowWithGoogleAnalytics

  // Initialize dataLayer if not exists
  win.dataLayer = win.dataLayer || []

  // Initialize gtag function if not exists
  if (!win.gtag) {
    win.gtag = function gtag(...args: unknown[]) {
      win.dataLayer.push(args)
    } as WindowWithGoogleAnalytics['gtag']
  }
}

/**
 * Check if analytics should be enabled based on environment and user preferences
 * @returns {boolean} Whether analytics is enabled
 */
export const isAnalyticsEnabled = (): boolean => {
  if (typeof window === 'undefined') return false
  if (process.env.NODE_ENV !== 'production') return false
  // Check both the constant and runtime environment variable for tests
  const measurementId = GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (!measurementId) return false
  if (navigator.doNotTrack === '1') return false

  return true
}

/**
 * Track a page view event
 * @param {string} url - The URL to track
 */
export const trackPageView = (url: string): void => {
  if (!isAnalyticsEnabled()) return

  const win = window as unknown as WindowWithGoogleAnalytics
  const measurementId = GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  
  // Initialize gtag if it doesn't exist yet (script may still be loading)
  initializeGoogleAnalytics()
  
  // Check if gtag is available, if not queue the event
  if (typeof win.gtag !== 'function') {
    // Queue the event in dataLayer for when gtag loads
    win.dataLayer = win.dataLayer || []
    win.dataLayer.push(['config', measurementId, { page_path: url }])
    return
  }
  
  const config: GtagConfig = {
    page_path: url,
  }

  win.gtag('config', measurementId!, config)
}

/**
 * Track a custom event
 * @param {string} action - The action to track
 * @param {string} category - Event category
 * @param {string} [label] - Optional event label
 * @param {number} [value] - Optional numeric value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isAnalyticsEnabled()) return

  const win = window as unknown as WindowWithGoogleAnalytics
  
  // Initialize gtag if it doesn't exist yet
  initializeGoogleAnalytics()
  
  // Check if gtag is available, if not queue the event
  if (typeof win.gtag !== 'function') {
    // Queue the event in dataLayer for when gtag loads
    win.dataLayer = win.dataLayer || []
    win.dataLayer.push(['event', action, {
      event_category: category,
      event_label: label,
      value: value,
    }])
    return
  }
  
  const params: GtagEventParams = {
    event_category: category,
    event_label: label,
    value: value,
  }

  win.gtag('event', action, params)
}

/**
 * Send initial gtag configuration
 * Called after the Google Analytics script loads
 */
export const sendGtagConfig = (): void => {
  const measurementId = GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (!measurementId) return

  const win = window as unknown as WindowWithGoogleAnalytics
  win.gtag('js', new Date())
  win.gtag('config', measurementId)
}
