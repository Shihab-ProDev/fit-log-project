'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutcontext';

const MarkDoneButton = ({ planItem }) => {

    const { id, completed } = planItem;

    const { plan, setPlan } = useContext(WorkoutContext);

    const handleMarkDone = () => {
        setPlan(
            plan.map(item =>
                item.id === id
                    ? { ...item, completed: true }
                    : item
            )
        );
    };

    return (
        <button
            onClick={handleMarkDone}
            disabled={completed}
            className={`btn py-2 px-3.5 rounded-4xl text-[12px] font-semibold flex gap-1.5 ${
                completed
                    ? 'bg-[#CCFF00] text-[#000000] cursor-not-allowed'
                    : 'bg-[#CCFF00] text-[#000000]'
            }`}
        >
            <Image
                src="/assets/check.svg"
                width={14}
                height={14}
                alt="check"
            />

            {completed ? 'Done' : 'Mark as done'}
        </button>
    );
};

export default MarkDoneButton;