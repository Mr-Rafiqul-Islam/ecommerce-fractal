import React from 'react'

export default function Heading({name}:{name:string}) {
  return (
    <div className='flex w-full relative'>
        <h1 className='after:w-[80px] after:h-[2px] after:bg-primary-700 pb-2 after:absolute after:left-0 after:bottom-0 text-xl lg:text-3xl font-bold capitalize border-b border-b-gray-300'>
        {name}
        </h1>
    </div>
  )
}
