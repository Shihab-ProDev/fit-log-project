import React from 'react';

const MyPlan = () => {
    return (
        <div className='container mx-auto'>
            <div className='space-y-2'>
                <h1 className='font-(family-name:--font-oswald) text-[30px] font-bold uppercase'>My Plan</h1>
                <p className='text-[14px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='border border-[#232732] rounded-2xl p-6 mt-6 grid grid-cols-3'>
                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Exercises</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#CCFF00]'>0</span>
                </div>

                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Minutes</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#ffffff]'>0</span>
                </div>

                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Calories</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#ffffff]'>0</span>
                </div>
            </div>
        </div>
    );
};

export default MyPlan;