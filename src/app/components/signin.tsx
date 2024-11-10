import React from 'react'
import { Button } from '@/app/components/button';

const Signin = () => {
  return (
    <div id='signin' className='h-auto w-80 flex justify-center items-center ml-72'>
      <div className='m-3 border-solid border-2 bg-white p-5'>
        <h1 className='font-semibold ml-1'>Sign In</h1>
        <p className='text-md ml-1'>
          Find your best ever meal
        </p>
        <br />
        <br />
        <br />
        <h3 className='font-medium'>Email Address</h3>
        <input className='m-1 p-1 border-slate-800 border-solid border-2 rounded-md w-72' type="text" placeholder='Type your email address'  />
        <h3 className='font-medium'>Password</h3>
        <input className='m-1 p-1 border-slate-800 border-solid border-2 rounded-md w-72' type="text" placeholder='Type your password'  />
        <Button className='flex mt-4 m-3 bg-yellow-400 w-80'>Sign In</Button>
        <Button className='flex m-3 bg-slate-400 w-80'>Create New Account</Button>
      </div>
    </div>
  )
}

export default Signin