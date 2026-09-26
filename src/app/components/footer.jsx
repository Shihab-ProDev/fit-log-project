import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='container mx-auto py-10 text-center flex flex-col sm:flex-row items-center justify-between mt-7.5 gap-2'>
            <span className='flex gap-2'>
            <Image src="/assets/footer icon.svg" width={20} height={20} alt='Logo'></Image>
            <p className="font-(family-name:--font-oswald) text-[14px] font-black uppercase">Fitlog</p>
            </span>
            <p className='text-[12px] text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;