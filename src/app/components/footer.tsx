import React from 'react'
import { Utensils,Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <div className='flex justify-center p-5 gap-16 bg-slate-800 text-white'>
                <div className='flex'>
                    <Utensils className="bg-slate-400" />
                    <div className='ml-1 font-extrabold font-serif text-xl'>Yums!</div>
                </div>
                <div>
                    <ul>
                        <li>Subscribe</li>
                        <li>Get 10% off on your first order</li>
                        <input className='mt-2 p-2' type="text" placeholder='Enter your email' />
                    </ul>
                </div>
                <div id='second' className=''>
                    <h1 className='flex justify-center font-extrabold text-2xl'>Support</h1>
                    <br />
                    <ul>
                        <li>yums@gmail.com</li>
                        <li>0305-1234567</li>
                    </ul>
                </div>
                <div id="third">
                    <h1 className='flex justify-center font-extrabold text-2xl'>Account</h1>
                    <br />
                    <ul>
                        <li>My Account</li>
                        <li>Login/Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div id="fourth">
                    <h1 className='flex justify-center font-extrabold text-2xl'>Quick Link</h1>
                    <br />
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex bg-slate-800 text-white justify-center items-center'>
            <Copyright />
                <p className='ml-2'> Copyright 2022.All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer