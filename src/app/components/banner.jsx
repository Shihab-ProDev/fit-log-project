import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto p-3 sm:p-14 border border-[#222630] rounded-2xl flex flex-col md:flex-row justify-between gap-10'>
            <div className='space-y-5 max-w-140'>
                <p className='text-[11px] text-[#C2F800] font-bold'>WORKOUT LIBRARY</p>
                <h1 className='font-(family-name:--font-oswald) text-[40px] sm:text-[60px] font-bold leading-12 sm:leading-17'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='text-[16px] text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <Link href='#library'>
                <button className='btn py-3 px-6 rounded-md bg-[#C2F800] hover:bg-white text-[12px] font-bold text-[#000000]'>BROWSE WORKOUTS</button>
                </Link>
            </div>
            <Image src="/assets/banner.png" width={334} height={0} alt='banner image' className='object-contain'></Image>
        </div>
    );
};

export default Banner;