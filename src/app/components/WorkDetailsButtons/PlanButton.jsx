'use client';
import { WorkoutContext } from '@/app/context/workoutcontext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';


const PlanButton = ({ fitData }) => {

    const { plan, setPlan } = useContext(WorkoutContext);

    const isAdded = plan.some(item => item.id === fitData.id);

    const handlePlanButton = () => {
        if (isAdded) return;
        setPlan([...plan, fitData]);
        toast.success("Added to today's plan", {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <button onClick={() => handlePlanButton()} disabled={isAdded} className='btn py-3 px-6 rounded-xl bg-[#CCFF00] text-[#0F1115] text-[14px] font-semibold disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed'><Image src="/assets/calender.svg" width={16} height={16} alt='calender' />
        {
            isAdded ? <p>Added to today&apos;s plan</p> : <p>Add to today&apos;s plan</p>
        }
        </button>
    );
};

export default PlanButton;