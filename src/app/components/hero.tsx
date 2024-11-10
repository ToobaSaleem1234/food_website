import React from 'react'
import Image from 'next/image'
const hero = () => {
  return (
    <div id='hero'>
      <div className='w-[1000] h-[100]'>
          <Image src={'/pizza.jpg'} width={1000} height={0} alt="pizza"></Image>
      </div>
      <div className='flex bg-yellow-500'>
        <h1 className='flex justify-center text-5xl text-extrabold text-center mt-3 ml-48 p-3 underline'>WELCOME TO YUMS!</h1>
      </div>
    </div>
  )
}

export default hero