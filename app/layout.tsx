import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "destiaeka — Portfolio",
  description: "Junior DevOps Engineer Portfolio",
  generator: "v0.app",
  icons: {
    icon: [ 
      { url: "/logo.png", sizes: "64x64", type: "/logo.png" }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistMono.variable} dark antialiased`}>
      <body className="font-sans">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
