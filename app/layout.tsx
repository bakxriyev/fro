import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Head from "next/head"   // ✅ qo‘shildi
import "./globals.css"

export const metadata: Metadata = {
  title: "Dostonjon Soyibov - Biznes Intensiv",
  description: "3 kunlik bepul biznes intensiviga qatnashing va 50$ bilan biznes boshlashni o'rganing",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <Head>
        <meta
          name="facebook-domain-verification"
          content="aj1y6z4hspaycoiexbshnxfb8wg8ys"
        />
      </Head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
