import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SaveCloseButton from '../my-plan/SaveCloseButton';

const SaveCard = ({ SaveItem }) => {

    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = SaveItem

    return (
        <div className='border border-[#232732] rounded-2xl transition-all hover:border-[#ffffff47] p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4'>

                <Image src={image} width={144} height={80} alt='name' className='w-36 h-20 rounded-xl object-cover'></Image>


                <div>
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

            <div className='flex gap-3 items-center'>

                <Link href={`/workout/${id}`}>
                <button className='btn text-[12px] border border-[#374151] py-2.5 px-4.5 rounded-4xl hover:border-[#ffffff4e]'>View Details</button>
                </Link>

                <SaveCloseButton SaveItem={SaveItem}></SaveCloseButton>
            </div>

        </div>
    );
};

export default SaveCard;