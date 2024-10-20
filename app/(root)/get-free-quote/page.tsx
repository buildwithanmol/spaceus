import Button from '@/components/Button'
import CallToAction from '@/components/CallToAction';
import { commercialArea, roomArea } from '@/data'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCalculator } from "react-icons/ai";

type AreaType = {
  bhk: string,
  options: {
    name: string,
    area: number
  }[]
}

function page(props: { searchParams: { [key: string]: string } }) {
  const { searchParams } = props;
  const room = roomArea.find(e => e.bhk.toLocaleLowerCase().replace(" ", "") === searchParams.bhk);
  return (
    <section className='flex flex-col items-center py-[3vw]'>
      <h1 className='text-3xl font-bold text-gray-400  ' >Get Free <span className='text-orange-500'>Quote.</span></h1>
      <div className='my-8 space-x-4'>
        <Button name="Residential" url={`/get-free-quote?type=residence`} style={`rounded-full ${searchParams.type !== "residence" ? "bg-white text-orange-500 ring-2 ring-orange-500 ring-inset hover:brightness-100" : "text-white"}`} />
        <Button name="Commercial" url={`/get-free-quote?type=commercial`} style={`rounded-full ${searchParams.type !== "commercial" ? "bg-white text-orange-500 ring-2 ring-orange-500 ring-inset hover:brightness-100" : "text-white"}`} />
      </div>
      {
        searchParams.type === "residence" ? <div className='border rounded-2xl p-[8vw] max-w-sm mx-4'>
          <div className=' grid grid-cols-2 '>
            {
              roomArea.map((e: AreaType, i: number) => (
                <div key={i} className={`rounded-full mx-4 my-4 border flex items-center justify-center ${searchParams.bhk === e.bhk.toLocaleLowerCase().replace(" ", "") ? 'bg-orange-500 text-white' : ""}`} style={{ width: '70px', height: '70px' }}>
                  <Link href={`/get-free-quote?type=${searchParams.type}&bhk=${e.bhk.toLocaleLowerCase().replace(" ", "")}`} >
                    <div className={`flex flex-col items-center justify-center`} style={{ maxWidth: '100%', textAlign: 'center' }}>
                      <h1 className={`text-xl font-semibold text-orange-500 ${searchParams.bhk === e.bhk.toLocaleLowerCase().replace(" ", "") ? 'text-white ' : ""}`}>{e.bhk.charAt(0)}</h1>
                      <h1 className={`text-gray-500 ${searchParams.bhk === e.bhk.toLocaleLowerCase().replace(" ", "") ? 'text-white ' : ""}`}>{e.bhk.slice(1)}</h1>
                    </div>
                  </Link>
                </div>

              ))
            }
          </div>
          <br />

          <div className='flex items-center flex-wrap gap-3 justify-center '>
            {
              room?.options.map((e, i) => (
                <Link className={`rounded-full ring-2 ring-inset px-2 py-1 ring-orange-500 inline-block text-orange-600 ${parseInt(searchParams.area) === room.options[i].area ? "bg-orange-500 text-white" : ""}`} href={`/get-free-quote?type=${searchParams.type}&bhk=${searchParams.bhk}&area=${e.area}`} key={i}>{e.name}</Link>
              ))
            }
          </div>
        </div> : <div className='border rounded-2xl w-full  p-[8vw] max-w-sm'>
          <div className='grid grid-cols-1 gap-2'>
            {
              commercialArea.map((e, i) => (
                <Link className={`rounded-full ring-2 ring-inset px-2 py-1 ring-orange-500 inline-block text-orange-600 text-center ${parseInt(searchParams.area) === e.area ? "bg-orange-500 text-white" : ""} `} href={`/get-free-quote?type=${searchParams.type}&area=${e.area}`} key={i}>{e.name}</Link>
              ))
            }
          </div>
        </div>
      }
      <div className='w-full max-w-sm p-[8vw]'>
        {
          searchParams.area ?
            <div>
              <h1 className='text-3xl font-bold text-gray-400 text-center' >Your <span className='text-orange-500'>Quote.</span></h1>
              <h1 className='text-3xl font-bold text-gray-400 text-center' > {(
                parseInt(searchParams.area) * 4500
              ).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
              })} </h1>
              <div className='rounded-full px-2 py-1 border my-2'>
                <p className='text-center text-orange-500'>
                  Note: The above quotation includes complete designing & construction work.
                </p>
              </div>
              <p className='text-center text-orange-500 text-2xl font-medium'>
                15% Off on <Link href="" className='underline ' >contacting</Link> us now.
              </p>
            </div>
            : <div className='border p-2 rounded-xl text-center font-semibold text-lg text-orange-500'>
              <AiOutlineCalculator className="mx-auto text-6xl my-3" />
              <h1 className='font-normal'> Select the details above to get quote. </h1>
            </div>
        }
      <CallToAction buttonTitle='Contact now' />
      </div>
    </section>
  )
}

export default page