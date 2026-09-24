import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className='py-6.5 px-6'>
            <div className='container mx-auto flex justify-between'>
                <div className='flex items-center gap-2.5'>
                    <Image src="/assets/logo.png" width={25} height={25} alt='Logo'></Image>
                    <p className="font-(family-name:--font-oswald) text-[18px] font-black uppercase">Fitlog</p>
                </div>

                <div>
                    <ul className='flex'>
                        <li className='bg-[#1A2312] py-1.5 px-4 rounded-4xl text-[12px] font-semibold text-[#C2F800]'>Workouts</li>
                        <li className='py-1.5 px-4 rounded-4xl text-[12px] font-semibold text-[#9CA3AF]'>My Plan</li>
                    </ul>
                </div>

                <div className='flex gap-6'>
                    <button className="btn p-0 text-[12px] bg-transparent">Plan <span className='bg-[#C2F800] w-5 h-5 text-[11px] font-semibold text-[#000000] flex justify-center items-center rounded-4xl'>0</span></button>


                    <button className="btn p-0 text-[12px] bg-transparent">Saved <span className='w-5 h-5 text-[11px] font-semibold text-[#ffffff] flex justify-center items-center rounded-4xl border-2 border-[#2D313B]'>0</span></button>
                </div>
            </div>
        </div>
    );
};

export default Header;