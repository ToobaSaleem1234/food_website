import React from 'react'
import { Button } from '@/app/components/button';
import Image from 'next/image';

const payment = () => {
    return (
        <div id='payment' className='h-auto w-80 flex justify-center items-center ml-72'>
            <div className='m-3 border-solid border-2 bg-white p-5'>
                <h1 className='font-semibold ml-1'>Payment</h1>
                <p className='text-md ml-1'>You deserve best meal</p>
                <br />
                <br />
                <br />
                <h3 className='font-medium'>Items ordered:</h3>
                <br />
                <div className='flex'>
                    <div id="right">
                        <Image className='m-1' src="/pizza.jpg" width={50} height={50} alt="pizza"></Image>
                        <Image className='m-1' src="/chowmein.jpg" width={50} height={50} alt="chowmein"></Image>
                        <Image className='m-1' src="/juice.jpg" width={50} height={50} alt="peach_juice"></Image>

                    </div>
                    <div id="left" className='flex'>
                        <div id="menu">
                            <ul>
                                <li className='ml-1 mt-6'>Pizza</li>
                                <li className='ml-1 mt-6'>Chowmein</li>
                                <li className='ml-1 mt-6'>Peach-juice</li>
                            </ul>
                        </div>
                        <div id="price" className=' ml-20'>
                            <ul>
                                <li className='ml-1 mt-6'>Rs.350/=</li>
                                <li className='ml-1 mt-6'>Rs.350/=</li>
                                <li className='ml-1 mt-6'>Rs.700/=</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />

                <br />
                <h3 className='font-medium'>Transactions Details:</h3>
                <br />
                <div className='flex'>
                    <ul className=' text-slate-600'>
                        <li>FoodItems</li>
                        <li>COD</li>
                        <li>Tax 5%</li>
                        <li className='font-semibold'>Total Price</li>
                    </ul>
                    <div className='flex'>
                        <ul className='ml-44'>
                            <li>Rs.1300/=</li>
                            <li>Rs.130/=</li>
                            <li>Rs.180/=</li>
                            <li className='font-semibold'>Rs.1610/=</li>
                        </ul>
                    </div>
                </div>
                <br />
                <br />
                <h3 className='font-medium'>Deliever to</h3>
                <br />
                <div className='flex'>
                    <div>
                        <ul className=' text-slate-600'>
                            <li>Name</li>
                            <li>Contact</li>
                            <li>Address</li>
                            <li>House No</li>
                            <li>City</li>
                        </ul>
                    </div>
                    <ul className='text-right'>
                        <li>Tooba Saleem</li>
                        <li>0305-1234567</li>
                        <li>Sunny Side Building,A.M.4, Burns Road</li>
                        <li>9</li>
                        <li>Karachi</li>
                    </ul>
                </div>
                <Button className='flex mt-10 m-3 bg-yellow-400 w-80'>Checkout Now</Button>
            </div>
        </div>
    )
}

export default payment