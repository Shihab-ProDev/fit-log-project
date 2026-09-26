import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='container mx-auto text-center max-w-100'>
            <div className='py-25 text-center'>
                        <h4 className='font-(family-name:--font-oswald) text-[20px] font-bold uppercase'>Oops! Page not found.</h4>
                        <p className='mt-2 text-[12px] text-[#A1A1AA]'>We can&apos;t seem to find the page you are looking for. It might have been moved, deleted, or you may have typed the wrong address.</p>

                        <Link href='/'>
                        <button className='btn py-3 px-6 rounded-4xl bg-[#CCFF00] text-[12px] font-semibold text-[#000000] mt-6'>Back to homepage</button>
                        </Link>
                    </div>
        </div>
    );
};

export default NotFound;