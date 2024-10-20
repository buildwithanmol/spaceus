import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Source_Sans_3 } from "next/font/google"
import { Toaster } from 'react-hot-toast'
import { ImWhatsapp } from "react-icons/im";
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Spaceus - Complete home interior solutions.',
  description: 'Spaceus excels in complete home interior solutions which offers complete concept to contruction services.',
}
const font = Source_Sans_3({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className=''>
          <Header />
          <div className='bg-white p-2 fixed right-0 border top-1/2 -translate-y-1/2 z-[200] rounded-full'>
            <Link href="https://wa.link/c63frz" target='_blank'><ImWhatsapp className="text-green-500 text-4xl" /></Link>
          </div>
          {children}
        </main>
        <Toaster position="top-center"
          reverseOrder={false} />
      </body>
    </html>
  )
}
