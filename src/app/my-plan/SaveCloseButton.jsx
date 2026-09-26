'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutcontext';

const SaveCloseButton = ({SaveItem}) => {

    const {save, setSave} = useContext(WorkoutContext);
    const exclude = save.filter(item => item != SaveItem)
    console.log(exclude)

    const handleRemovePlan = () =>{
        setSave(exclude)
    }


    return (
        <div>
            <Image onClick={() => handleRemovePlan()} className='ml-1.5 cursor-pointer' src='/assets/cross.svg' width={16} height={16} alt='Close' />
        </div>
    );
};

export default SaveCloseButton;