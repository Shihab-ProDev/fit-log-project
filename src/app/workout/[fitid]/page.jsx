import PlanButton from '@/app/components/WorkDetailsButtons/PlanButton';
import SaveButton from '@/app/components/WorkDetailsButtons/SaveButton';
import Image from 'next/image';
import React from 'react';

const WorkOutDetailPage = async ({ params }) => {
    const { fitid } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${fitid}`);
    const fitData = await res.json();

    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = fitData

    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7 lg:gap-14'>
            <div>
                <Image
                    src={image}
                    width={1000}
                    height={0}
                    alt={name}
                    className='h-full object-cover rounded-2xl'
                />
            </div>


            <div>
                <h1 className='font-(family-name:--font-oswald) text-[28px] md:text-[36px] font-bold uppercase'>{name}</h1>
                <p className='mt-3 text-[16px] text-[#9CA3AF]'>{description}</p>

                <div className='flex gap-2 mt-5'>
                    {muscleGroups.map((muscle, ind) => <span key={ind} className='bg-[#C2F800] py-0.5 px-2.5 rounded-4xl text-[11px] font-bold text-[#000000] uppercase'>{muscle}</span>)}
                </div>

                <div className='border border-[#232834] rounded-2xl overflow-hidden mt-7.5'>
                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>EQUIPMENT</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{equipment}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>DIFFICULTY</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{difficulty}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>SETS</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{sets}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>REPS</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{reps}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>DURATION</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{duration}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>CALORIES</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{caloriesBurned}</p>
                    </div>

                    <div className='py-3.5 px-6 flex justify-between border-b border-[#232834]'>
                        <p className='text-[12px] font-bold text-[#9CA3AF] uppercase'>RATING</p>
                        <p className='text-[14px] font-semibold text-[#E5E7EB]'>{rating}</p>
                    </div>
                </div>


                <div className='mt-7.5'>
                    <h4 className='text-[16px] font-extrabold mb-4'>INSTRUCTIONS</h4>
                    <ol className='list-decimal list-inside text-[14px] text-[#D1D5DB]'>
                        {instructions.map((item, ind) =>
                            <li key={ind} className='mt-2'>{item}</li>
                        )}
                    </ol>
                </div>


                <div className='flex flex-col md:flex-row gap-4 mt-9'>
                    
                    <PlanButton fitData={fitData}></PlanButton>
                    <SaveButton fitData={fitData}></SaveButton>
                    
                </div>

            </div>

        </div>
    );
};

export default WorkOutDetailPage;