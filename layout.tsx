import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INSA Cloud - Academic Cloud Platform",
  description: "Enterprise-grade cloud infrastructure designed for academic institutions and research excellence.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
