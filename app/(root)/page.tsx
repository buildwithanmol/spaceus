import CallToAction from '@/components/CallToAction'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Stats from '@/components/Stats'
import React from 'react'

function page() {
  return (
    <section>
        <Hero/>
        <Stats/>
        <Slider/>
        <CallToAction buttonTitle='Book Now'/>
    </section>
  )
}

export default page