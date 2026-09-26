import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PlanCloseButton from '../my-plan/PlanCloseButton';
import MarkDoneButton from '../my-plan/MarkDoneButton';


const PlanCard = ({ planItem }) => {

    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = planItem

    return (
        <div className='border border-[#232732] rounded-2xl transition-all hover:border-[#ffffff47] p-4 flex flex-col md:flex-row items-center justify-between gap-5'>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full'>

                <Image src={image} width={144} height={80} alt='name' className='w-full md:w-36 h-40 md:h-20 rounded-xl object-cover'></Image>


                <div className='w-full md:w-max'>
                    <div className='flex flex-col gap-0.5'>
                        <h3 className='font-(family-name:--font-oswald) text-[16px] font-bold uppercase'>{name}</h3>

                        <p className='text-[12px] text-[#9CA3AF]'>{equipment}</p>
                    </div>

                    <div className='mt-2 flex gap-4  text-[12px] text-[#D1D5DB]'>
                        <span className='flex gap-1.5'><Image src='/assets/green time.svg' width={14} height={14} alt='duration'></Image> {duration} min</span>
                        <span className='flex gap-1.5'><Image src='/assets/green cal.svg' width={14} height={14} alt='calories'></Image>{caloriesBurned} Kcal</span>
                        <span className='flex gap-1.5'><Image src='/assets/green star.svg' width={14} height={14} alt='star'></Image>{rating}</span>
                    </div>

                </div>
            </div>

            <div className='flex gap-3 items-center w-full md:justify-end'>

                <Link href={`/workout/${id}`}>
                <button className='btn text-[12px] border border-[#374151] py-2.5 px-4.5 rounded-4xl hover:border-[#ffffff4e]'>View Details</button>
                </Link>


                <MarkDoneButton planItem={planItem}></MarkDoneButton>

                <PlanCloseButton planItem={planItem}></PlanCloseButton>
            </div>

        </div>
    );
};

export default PlanCard;