import DHero from '@/components/DHero'
import { Hero } from '@/components/Hero'
import Stats from '@/components/Stats'
import React from 'react'

function page() {
  return (
    <main>
      <Hero />
      <DHero />
      <Stats />
    </main>
  )
}

export default page