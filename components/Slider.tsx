'use client'
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css"
import { sliderImages } from '@/data'
import Image from 'next/image'
function Slider() {
    return (
        <section>
            <h1 className='text-2xl font-semibold text-center my-4 text-orange-500 '>Our Work</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    sliderImages.map((e, i) => (
                        <SwiperSlide key={i}>
                            <Image className='aspect-video object-cover mx-auto rounded-md' src={e} alt='background-image' width={400} height={400} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Slider