'use client';

import { WorkoutContext } from '@/app/context/workoutcontext';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';

const SaveButton = ({fitData}) => {

    const {save, setSave} = useContext(WorkoutContext);
    const isAdded = save.some(item => item.id === fitData.id);

    const handleSaveButton = () =>{
        if (isAdded) return;
        setSave([...save, fitData]);
        toast.success("Added to save list", {
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
        <button onClick={() => handleSaveButton()} disabled={isAdded} className='btn border border-[#374151] rounded-xl py-3 px-6 text-[14px] font-semibold hover:border-[#ffffff58]'><Image src="/assets/save.svg" width={16} height={16} alt='calender' /> Save for later</button>
    );
};

export default SaveButton;