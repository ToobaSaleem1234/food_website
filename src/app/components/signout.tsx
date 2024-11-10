import React from 'react'
import { Button } from '@/app/components/button';
import Image from 'next/image';

const signout = () => {
  return (
    <div id='signout' className='h-auto w-80 flex justify-center items-center ml-72'>
      <div className='m-3 border-solid border-2 bg-white p-5'>
        <h1 className='font-semibold ml-1'>Sign Out</h1>
        <p className='text-md ml-1'>Register and eat</p>
        <br />
        <Image className='flex justify-center h-44 w-44 border-solid border-black border-2 rounded-full bg-cover m-1 ml-20' src={"/logofood.jpg"} width={100} height={100} alt="Your profile"></Image>

        <h3 className='font-medium'>Full Name</h3>
        <input className='m-2 p-1 border-slate-800 border-solid border-2 rounded-md w-72' type="text" placeholder='Type your full name' />
        <h3 className='font-medium'>Email address</h3>
        <input className='m-2 p-1 border-slate-800 border-solid border-2 rounded-md w-72' type="text" placeholder='Type your email address' />
        <h3 className='font-medium'>Password</h3>
        <input className='m-2 p-1 border-slate-800 border-solid border-2 rounded-md w-72' type="text" placeholder='Type your password' />
        <Button className='flex m-3 bg-yellow-400 w-80'>Continue</Button>
      </div>
    </div>
  )
}

export default signout