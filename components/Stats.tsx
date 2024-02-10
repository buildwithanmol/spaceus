import React from 'react'

const Stats = () => {
    return (
        <section className='grid grid-cols-2 md:grid-cols-3 md:place-items-center  p-9 gap-8 border-b border-b-white/30'>
                {
                    [
                        {
                            name: 'Clients', 
                            stats: '120+'
                        },
                        {
                            name: 'Projects', 
                            stats: '200+'
                        },
                        {
                            name: 'Experience', 
                            stats: '25+'
                        },
                    ].map((item, index) => (
                        <div key={index}>
                            <h1 className='border_around text-5xl md:text-[7vw]  text-transparent'> {item.stats} </h1>
                            <h1 className='md:text-xl'> {item.name} </h1>
                        </div>
                    ))
                }
        </section>
    )
}

export default Stats