import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <nav className='flex items-center justify-between px-[5vw]  py-[4vw] md:py-[1.5vw]  bg-white text-black'>
      <Link href="/" className='text-2xl md:text-3xl'>
        <h1 className='font-bold'>Spaceus</h1>
      </Link>
      <Menu />
      <ul className='items-center gap-4 font-medium text-xl hidden md:flex  '>
        <Link href='/get-free-quote' className='underline_hover'> <li>Get Free Quote</li></Link>
        <Link href='/connect' className='underline_hover'> <li>Connect With Us</li></Link>
      </ul>
    </nav>
  )
}

export default Header