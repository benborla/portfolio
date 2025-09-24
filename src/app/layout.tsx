import Navbar from "@/components/navbar";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Fullstack Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: `${DATA.name} is a ${DATA.description} Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.`,
  keywords: [
    "Fullstack Engineer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Philippines",
    "Ben Borla",
    "Software Engineer",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} - Fullstack Engineer`,
    description: `${DATA.name} is a ${DATA.description} Specializing in React, Next.js, Node.js, and modern web technologies.`,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} - Fullstack Engineer`,
    description: `${DATA.name} is a ${DATA.description} Specializing in React, Next.js, Node.js, and modern web technologies.`,
    card: "summary_large_image",
    creator: "@benborla",
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body id="main-content"
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
