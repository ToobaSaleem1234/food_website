import React from 'react'
import { Button } from '@/app/components/button';
import { Utensils } from 'lucide-react';
import Link from 'next/link';

const header = () => {
  return (
    <div className='z-50 sticky top-0'>
        <div className='bg-slate-800 text-white flex'>
        <Utensils className="bg-slate-400 mt-3 ml-2" /> <div className='mt-3 ml-1'>Yums!</div>
        <ul className='flex gap-9 m-3 ml-28 mb-1 '>
        <Link className='hover:underline' href={"/"} target='_blank'>Home</Link>
          <Link className='hover:underline' href={"#menu"} target='_blank'>Menu</Link>
          <Link className='hover:underline' href={"#payment"} target='_blank'>Payment</Link>
          <Link className='hover:underline' href={"#signin"} target='_blank'>Sign In</Link>
          <Link className='hover:underline' href={"#signout"} target='_blank'>Sign Out</Link>
          <input type="text" placeholder='Search your product' className='outline-none text-black rounded-full p-2 mb-2'/>
          <Button className='text-white bg-slate-400'>Search</Button>
          
        </ul>
      </div>
    </div>
  )
}

export default header