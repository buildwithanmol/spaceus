'use client'
import { clientAction } from '@/lib/clientActions'
import Button from './Button'

function HomeForm() {
    return (
        <div>
            <form action={(e) => clientAction(e)} className='flex flex-col gap-2 max-w-sm mx-auto'>
                <Button name='Get Free Quote' url='/get-free-quote?type=residence&bhk=1rk&area=250'
                    style='text-white'
                />
                <input type="number" name='phone_number' className='text-lg py-2 px-4 rounded-md text-orange-600' placeholder='(+91) Enter Mobile Nunber' />
            </form>
        </div>
    )
}

export default HomeForm