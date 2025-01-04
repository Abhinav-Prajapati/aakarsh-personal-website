import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aakarsh Prajapati',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/android-chrome-512x512.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
