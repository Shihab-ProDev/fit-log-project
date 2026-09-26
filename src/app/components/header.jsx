'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeaderCounted from './HeaderCounted';
import { usePathname } from 'next/navigation';



const Header = () => {

    const pathname = usePathname();

    const menuLink = <>

        <Link href="/">
            <li className={`py-1.5 px-4 rounded-4xl text-[12px] font-semibold ${pathname === '/'
                ? 'bg-[#1A2312] text-[#C2F800]'
                : 'text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800]'
                }`}>Workouts</li>
        </Link>

        <Link href="/my-plan">
            <li className={`py-1.5 px-4 rounded-4xl text-[12px] font-semibold ${pathname === '/my-plan'
                ? 'bg-[#1A2312] text-[#C2F800]'
                : 'text-[#9CA3AF] hover:bg-[#1A2312] hover:text-[#C2F800]'
                }`}>My Plan</li>
        </Link>

    </>


    return (
        <div className='py-6.5 px-3 sm:px-6 bg-[#0F1115] sticky top-0 z-100'>
            <div className='container mx-auto flex justify-between items-center'>



                {/* Mobile menu */}

                <div className="dropdown sm:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menuLink}
                    </ul>
                </div>


                <Link href='/'>
                    <div className='flex items-center gap-2.5'>
                        <Image src="/assets/logo.png" width={25} height={25} alt='Logo'></Image>
                        <p className="font-(family-name:--font-oswald) text-[18px] font-black uppercase">Fitlog</p>
                    </div>
                </Link>

                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        {menuLink}
                    </ul>
                </div>


                <div>
                    <HeaderCounted></HeaderCounted>
                </div>





            </div>
        </div>
    );
};

export default Header;