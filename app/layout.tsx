import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { I18nProvider } from "@/components/i18n-provider"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
