import Nav from '@/components/nav/Nav'
import '../scss/global.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AleDC27',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
{      <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />}
      </head>
      <body className={inter.className}>
      <Nav/>
        {children}
        </body>
    </html>
  )
}
