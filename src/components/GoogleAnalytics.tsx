import Script from 'next/script'

export function GoogleAnalytics() {
  // Use environment variable directly in the component
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // Only render in production with a valid measurement ID
  if (process.env.NODE_ENV !== 'production' || !measurementId) {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
