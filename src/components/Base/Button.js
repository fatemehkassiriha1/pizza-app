import React from 'react'

const Button = ({children}) => {
  return (
    <button className='rounded-lg bg-zinc-700 text-white text-sm
     font-light flex justify-center px-4 py-2 hover:bg-zinc-500 transition duration-100'>
    {children}
    </button>
  )
}

export default Button
