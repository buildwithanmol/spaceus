import React from 'react'

function Stats() {
    return (
        <section className='py-7 w-full grid grid-cols-3 place-items-center max-w-lg'>

            <div>
                <h1 className='text-lg text-gray-500'> Clients </h1>
                <span className='text-gray-600 font-semibold text-lg'>350+ </span>
            </div>
            <div>
                <h1 className='text-lg text-gray-500'> Projects </h1>
                <span className='text-gray-600 font-semibold text-lg'>380+ </span>
            </div>
            <div>
                <h1 className='text-lg text-gray-500'> Experience </h1>
                <span className='text-gray-600 font-semibold text-lg'>25+ Years </span>
            </div>

        </section>
    )
}

export default Stats