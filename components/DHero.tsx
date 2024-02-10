'use client'
import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { Check } from 'lucide-react'


const DHero = () => {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className="embla hidden md:block" ref={emblaRef}>
            <div className="embla__container">
                {
                    [
                        {
                            image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            ,
                            title: 'Space your living'
                        },
                        {
                            image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            ,
                            title: 'Space your living'
                        },
                        {
                            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            ,
                            title: 'Space your living'
                        },
                    ].map((item, index) => (
                        <div className="embla__slide relative" key={index}>
                            <div className='flex items-center justify-center gap-[2vw] absolute z-50 top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-3xl p-8 rounded-xl'>
                                <h1 className='text-[5vw] font-extralight  max-w-sm uppercase leading-none tracking-tighter'>{item.title}</h1>
                                <div className='flex flex-col gap-4 '>
                                    <Link href="/get-free-quote" className='px-8 py-4 bg-white text-black rounded-full font-semibold text-center'>
                                        Get Free Quote
                                    </Link>
                                    <div className='flex items-center gap-3'>
                                        <input type="number" className='px-8 py-4 rounded-full bg-white text-black' placeholder='(+91) Enter Phone ' />
                                        <span className='p-3 rounded-full   bg-white '>
                                            <Check size={30} className='' color='#111111' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Image src={item.image} className='aspect-[16/7.5] brightness-75 w-full object-cover  ' key={index} alt='image' width={900} height={900} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DHero