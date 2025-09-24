/**
 * Type definitions for Google Analytics integration
 */

/**
 * Google Analytics gtag function signature
 */
export type GtagFunction = (
  command: 'config' | 'event' | 'js' | 'set',
  targetId: string | Date,
  config?: GtagConfig | GtagEventParams
) => void

/**
 * Configuration options for gtag
 */
export interface GtagConfig {
  page_path?: string
  page_title?: string
  page_location?: string
  send_page_view?: boolean
  [key: string]: unknown
}

/**
 * Event parameters for gtag
 */
export interface GtagEventParams {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: unknown
}

/**
 * Extended Window interface with Google Analytics
 */
export interface WindowWithGoogleAnalytics extends Window {
  gtag: GtagFunction
  dataLayer: unknown[]
}

/**
 * Props for Script component with CSP support
 */
export interface GoogleAnalyticsScriptProps {
  measurementId: string
  nonce?: string
  onError?: (error: Error) => void
}

/**
 * Configuration for analytics initialization
 */
export interface AnalyticsConfig {
  measurementId: string | undefined
  enableInDevelopment?: boolean
  respectDoNotTrack?: boolean
  debugMode?: boolean
}
