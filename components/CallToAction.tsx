'use client'
import { clientAction } from '@/lib/clientActions';
import React from 'react'

function CallToAction({ buttonTitle }: { buttonTitle: string }) {
    return (
        <>
            <form action={(e) => clientAction(e)} className='flex flex-col mx-auto py-[5vw] w-full max-w-xs gap-2'>
                <input type="text" name="phone_number" className='px-4 py-2 rounded-md text-lg border w-full' placeholder='(+91) Enter Mobile Number' />
                <button type='submit' className='text-white bg-orange-500 px-4 py-2 rounded-md font-semibold text-xl transition-all filter hover:brightness-90'>{buttonTitle}</button>
            </form>
        </>
    )
}

export default CallToAction