import { features } from '@/constants/data'
import React from 'react'

const RightPanel = () => {
  return (
    <section className='bordered w-full h-full  flex flex-col items-center justify-center gap-10'>
        <div className='text-center gap-2.5 flex flex-col'>
        <h1 className=''>ARGN</h1>
        <p className='text-center w-[25rem]'>
            Developer's secret for Award-Winning animations — One command away.
        </p>
        </div>
        <div className='grid grid-cols-3 gap-20 justify-center'>
            {features.map((feature) => (
                <div key={feature.description} className='flex flex-col text-center text-sm flex-wrap items-center gap-2.5'>
                    <feature.icon size={30}/>
                    <div>{feature.description}</div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RightPanel