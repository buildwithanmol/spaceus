import Link from 'next/link'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";

function Header() {
  return (
    <nav className='px-4 py-2 border-b-8 border-orange-500'>
        <Link href="/">
            <h1 className='text-3xl text-orange-500 font-semibold '> Spaceus. </h1>
        </Link>
    </nav>
  )
}

export default Header