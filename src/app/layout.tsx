import './globals.css'
import { Inter } from 'next/font/google'
import { font } from './styles/font'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shape of My Shine',
  description: 'Shine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
