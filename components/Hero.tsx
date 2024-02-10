'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { MoveLeft, MoveRight, Phone } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
    return (
        <div className="embla md:hidden">
            <div ref={emblaRef} className="embla__viewport">
                <div className="embla__container ">
                    {
                        [
                            {
                                image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                title: "Space your livin'"
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                title: "Space your livin'"
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                title: "Space your livin'"
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                title: "Space your livin'"
                            },

                        ].map((item, index) => (
                            <div className='relative embla__slide px-4 py-4 md:hidden ' key={index} >
                                <div className='w-[90%] z-50 absolute bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-start p-5 gap-5'>
                                    <h1 className='text-4xl font-semibold'> {item.title} </h1>
                                    <Link href="/get-free-quote" className='bg-white text-black px-5 py-3 rounded-full font-semibold w-full text-center' >
                                        Get Free Quote
                                    </Link>
                                    <span className='flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black w-full '>
                                        <Phone />
                                        <input placeholder='(+91) Enter your phone' type="number" className='bg-white text-black outline-none w-full' />
                                    </span>
                                </div>
                                <Image src={item.image} alt='slide_image' width={800} height={600} className='aspect-[9/12] object-cover rounded-xl brightness-75' />
                            </div>
                        ))
                    }
                </div>
                <div className='px-8 flex items-center justify-between'>
                    <button onClick={scrollPrev}>  <MoveLeft /> </button>
                    <button onClick={scrollNext}> <MoveRight /> </button>
                </div>
            </div>
        </div>
        
    )
}
