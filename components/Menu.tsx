'use client'
import gsap from 'gsap'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { CiMenuFries } from 'react-icons/ci'

const Menu = () => {
    const menu_bar = useRef(null)
    return (
        <div className='relative'>
            <CiMenuFries size={25} className='font-bold md:hidden cursor-pointer ' onClick={() => {
                gsap.to(menu_bar.current, {
                    duration: 0.8,
                    right: '0%',
                    ease: 'power2.inOut'
                })
            }} />
            <div className='fixed top-0 right-full  w-screen bg-white z-50 h-screen' ref={menu_bar} >
                <X className='absolute right-5 top-5' onClick={() => {
                    gsap.to(menu_bar.current, {
                        duration: 0.8,
                        right: '100%',
                        ease: 'power2.inOut'
                    })
                }} />
                <h1 className='border_around text-6xl text-center py-[20vw]  text-white '> Menu </h1>
                <div className='flex flex-col items-center text-xl gap-8  '>
                    <Link href="/get-free-quote" className='text-white bg-black px-8 py-2 rounded-full' >Get free quote</Link>
                    <Link href="/connect"  className='text-black border-2  bg-white px-8 py-2 rounded-full'>Connect with us</Link>
                    <Image src='/assets/menu_asset.png' alt='menu_supporting_image' width={400} height={250} className='absolute bottom-0 left-1/2 -translate-x-1/2 right-0'  />
                </div>
            </div>
        </div>
    )
}

export default Menu