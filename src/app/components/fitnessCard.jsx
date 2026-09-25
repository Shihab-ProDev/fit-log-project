import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FitnessCard = ({ fitItem }) => {

    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = fitItem

    return (
        <div className='border border-[#222630] rounded-2xl overflow-hidden transition-all hover:border-[#ffffff47]'>
            <Image src={image} width={1000} height={100} alt='name' className='w-full h-48 object-cover'></Image>

            <div className='p-6'>
                <div className='flex gap-2'>
                    {muscleGroups.map((muscle, ind) => <span key={ind} className='bg-[#C2F800] py-0.5 px-2.5 rounded-4xl text-[11px] font-bold text-[#000000] uppercase'>{muscle}</span>)}
                </div>

                <div className='mt-3 flex flex-col gap-1'>
                    <Link href={`/workout/${id}`}>
                    <h3 className='font-(family-name:--font-oswald) text-[18px] font-bold uppercase'>{name}</h3>
                    </Link>
                    
                    <p className='text-[12px] text-[#9CA3AF]'>{equipment}</p>
                </div>

                <div className='mt-4 pt-3 flex gap-4 border-t border-[#20242E] text-[12px] text-[#9CA3AF]'>
                    <span className='flex gap-1.5'><Image src='/assets/duration.svg' width={14} height={14} alt='duration'></Image> {duration} min</span>
                    <span className='flex gap-1.5'><Image src='/assets/calories.svg' width={14} height={14} alt='calories'></Image>{caloriesBurned} Kcal</span>
                    <span className='flex gap-1.5'><Image src='/assets/star.svg' width={14} height={14} alt='star'></Image>{rating}</span>
                </div>
                
            </div>
        </div>
    );
};

export default FitnessCard;