'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutcontext';

const PlanCloseButton = ({planItem}) => {

    const {plan, setPlan} = useContext(WorkoutContext);
    const exclude = plan.filter(item => item != planItem)
    console.log(exclude)

    const handleRemovePlan = () =>{
        setPlan(exclude)
    }


    return (
        <div>
            <Image onClick={() => handleRemovePlan()} className='ml-1.5 cursor-pointer' src='/assets/cross.svg' width={16} height={16} alt='Close' />
        </div>
    );
};

export default PlanCloseButton;