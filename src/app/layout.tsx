import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/app/provider/Provider'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/footer'
import IsSessionProvider from '@/app/provider/IsSessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full max-w-[1680px] mx-auto`}>
        <IsSessionProvider>
          <Provider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </Provider>
        </IsSessionProvider>
      </body>
    </html>
  )
}
