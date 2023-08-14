import React from 'react'

const MenuItem = ({imageUrl,title,price}) => {
  return (
    <section className='flex flex-col justify-start gap-6 rounded-xl hover:shadow-xl
     hover:shadow-neutral-200 transition duration-150 cursor-pointer w-[280px] xl:w-[300px] 
     h-[350px] m-[20px] border-[1px] border-zinc-300'>
        <img src={imageUrl} alt={imageUrl} className='w-full h-1/2 rounded-t-xl' />
        <h4 className='pl-4'>{title}</h4>
        <p className='p-6 font-medium mt-auto'>{price}</p>
    </section>
  )
}

export default MenuItem
