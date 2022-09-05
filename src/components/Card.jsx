import React from 'react'

function Card({ url, name, img }) {
  return (
    <a href={url} className='group'>
        <div className='flex flex-col transition duration-300 ease-in-out
        justify-center items-center bg-white p-12 lg:rounded-3xl md:rounded-lg rounded-none border-2 
        group-hover:border-red-400'>
            <img className='h-16 w-16' src={img} alt='1234' />
            <span className='lg:text-lg md:text-lg text-xs transition duration-300 ease-in-out
            font-semibold group-hover:text-red-400'>{name}</span>
        </div>
    </a>
  )
}

export default Card