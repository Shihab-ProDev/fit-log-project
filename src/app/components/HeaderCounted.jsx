'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutcontext';

const HeaderCounted = () => {

    const {plan, save} = useContext(WorkoutContext);


    return (
        <div className='flex gap-6'>
            <Link href='/my-plan'>
                <button className="btn shadow-none border-0 p-0 text-[12px] bg-transparent">Plan <span className='bg-[#C2F800] w-5 h-5 text-[11px] font-semibold text-[#000000] flex justify-center items-center rounded-4xl'>{plan.length}</span></button>
            </Link>

            <Link href='/my-plan'>
                <button className="btn shadow-none border-0 p-0 text-[12px] bg-transparent">Saved <span className='w-5 h-5 text-[11px] font-semibold text-[#ffffff] flex justify-center items-center rounded-4xl border-2 border-[#2D313B]'>{save.length}</span></button>
            </Link>
        </div>
    );
};

export default HeaderCounted;