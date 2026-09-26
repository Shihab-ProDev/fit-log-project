'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeaderCounted from './HeaderCounted';
import { usePathname } from 'next/navigation';



const Header = () => {

    const pathname = usePathname();


    return (
        <div className='py-6.5 px-6 bg-[#0F1115] sticky top-0'>
            <div className='container mx-auto flex justify-between'>
                <Link href='/'>
                    <div className='flex items-center gap-2.5'>
                        <Image src="/assets/logo.png" width={25} height={25} alt='Logo'></Image>
                        <p className="font-(family-name:--font-oswald) text-[18px] font-black uppercase">Fitlog</p>
                    </div>
                </Link>

                <div>
                    <ul className='flex'>
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