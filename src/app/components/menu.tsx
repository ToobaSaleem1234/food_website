import React from 'react'
import Image from 'next/image'
import { Button } from './button'

const menu = () => {
    return (
        <div id='menu'>
            <div className='bg-yellow-500'>
                <h1 className='text-2xl ml-80 font-bold'>Let's get some food</h1>
            </div>
            <div className='flex'>
                <Image className='m-6' src="/burger.jpg" width={300} height={300} alt='burger'></Image>
                <Image className='m-6' src="/pasta.jpg" width={300} height={300} alt='pasta'></Image>
                <Image className='m-6' src="/fries.jpg" width={250} height={250} alt='fries'></Image>
            </div>
            <div className='flex gap-64 ml-7'>
                <span className='text-1xl font-serif font-semibold ml-14'>Chicken Burger</span>
                <span className='text-1xl font-serif font-semibold -ml-6'>Pasta with Sauce</span>
                <span className='text-1xl font-serif font-semibold -ml-11'>Plain Fries</span>
            </div>
            <div>
                <ul className='flex gap-80 m-3 mb-1 mt-1 font-bold'>
                    <li className='ml-24'>Rs.350/=</li>
                    <li className='-ml-7'>Rs.250/=</li>
                    <li className='-ml-10'>Rs.100/=</li>
                </ul>
                <div className='flex'>
                    <Button className='w-28 ml-24'>-   1   +</Button>
                    <Button className='w-28 ml-60'>-   1   +</Button>
                    <Button className='w-28 ml-56'>-   1   +</Button>
                </div>
                <div className='flex m-4'>
                    <Button className='bg-yellow-500 w-40 ml-14'>Add To Cart</Button>
                    <Button className='bg-yellow-500 w-40 ml-48'>Add To Cart</Button>
                    <Button className='bg-yellow-500 w-40 ml-44'>Add To Cart</Button>
                </div>
            </div>
            <div className='flex'>
                <Image className='m-6' src="/pancake.jpg" width={300} height={300} alt='pancake'></Image>
                <Image className='m-6' src="/smoothie.jpg" width={300} height={300} alt='smoothie'></Image>
                <Image className='m-6' src="/tea.jpg" width={250} height={250} alt='tea'></Image>
            </div>
            <div>
                <span className='text-xl font-serif font-semibold m-6 ml-9'>Pancake Rs.250/=</span>
                <span className='text-xl font-serif font-semibold m-6 ml-32'>Strawberry Smoothie Rs.200/=</span>
                <span className='text-xl font-serif font-semibold m-6 ml-4'>Green Tea Rs.150/=</span>
            </div>
            <div>
                <div className='flex'>
                    <Button className='w-28 ml-24'>-   1   +</Button>
                    <Button className='w-28 ml-60'>-   1   +</Button>
                    <Button className='w-28 ml-56'>-   1   +</Button>
                </div>
                <div className='flex m-4'>
                    <Button className='bg-yellow-500 w-40 ml-14'>Add To Cart</Button>
                    <Button className='bg-yellow-500 w-40 ml-48'>Add To Cart</Button>
                    <Button className='bg-yellow-500 w-40 ml-44'>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default menu