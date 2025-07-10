import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developers Point - Professional Freelancing Services",
  description:
    "High-quality, affordable freelancing services including web development, Zoho CRM solutions, and custom website design. Expert team delivering quality results.",
  keywords: "freelancing, web development, Zoho CRM, website design, custom development, affordable services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
