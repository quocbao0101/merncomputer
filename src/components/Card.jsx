import React from 'react'

function Card({ url, name, img }) {
  return (
    <a href={url} className='group'>
        <div className='flex flex-col transition duration-300 ease-in-out
        justify-center items-center bg-white p-12 rounded-3xl border-2 
        group-hover:border-red-400'>
            <img className='h-16 w-16' src={img} alt='1234' />
            <span className='text-lg transition duration-300 ease-in-out
            font-semibold group-hover:text-red-400'>{name}</span>
        </div>
    </a>
  )
}

export default Card