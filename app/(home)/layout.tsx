import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import { BsWhatsapp } from 'react-icons/bs'
import { FaWhatsapp } from "react-icons/fa6";
import { Phone } from 'lucide-react'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Spaceus India',
  description: 'Spaceus excels in complete home interior solutions which offers complete concept to contruction services.',
  openGraph: {
    title: 'Best Interior Designers | Budget Friendly Home Interiors - Spaceus',
    description: 'Spaceus excels in complete home interior solutions which offers complete concept to contruction',
    url: 'https://www.spaceus.in/',
    type: 'website'
  },
  keywords: [
    "Interior designer",
    "home interior designer",
    "spaceus interior design",
    "spaceus designers",
    "interior design company",
    "interior designer company",
    "best interior design",
    "best interior designer",
    "home designer",
    "interior design",
    "room designers",
    "home interior design",
    "house interior",
    "interior home",
    "modern interior design",
    "interior designers",
    "spaceus interior",
    "spaceus company"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <div className='flex flex-col items-center gap-4 py-6 rounded-l-3xl fixed right-0 w-16 bottom-[20%]  bg-white '>
          <Link href="https://api.whatsapp.com/send/?phone=%2B919029455552&text&type=phone_number&app_absent=0">
            <BsWhatsapp size={35} color='#111111'  />
          </Link>
          <Link href="tel:*9029455552">
          <Phone size={35}  color='#111111' />
          </Link>
        </div>
      </body>
    </html>
  )
}
