import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EC Tech Fest 2026 | ECE Department',
  description: 'The premier technology festival of the ECE Department. Innovation, robotics, workshops, and cutting-edge competitions await.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
