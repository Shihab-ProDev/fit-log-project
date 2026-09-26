'use client';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/workoutcontext';
import PlanCard from '../components/PlanCard';
import SaveCard from '../components/SaveCard';
import Link from 'next/link';


const MyPlan = () => {

    const {plan, save} = useContext(WorkoutContext);
    console.log(plan, save)

    const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = plan

    const time = plan.map(item => item.duration);
    const calories = plan.map(item => item.caloriesBurned)

    return (
        <div className='container mx-auto'>
            <div className='space-y-2'>
                <h1 className='font-(family-name:--font-oswald) text-[30px] font-bold uppercase'>My Plan</h1>
                <p className='text-[14px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='border border-[#232732] rounded-2xl p-6 mt-6 grid grid-cols-3'>
                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Exercises</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#CCFF00]'>{plan.length}</span>
                </div>

                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Minutes</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#ffffff]'>{time.reduce((acc,item) => {
                        return acc+item
                    } ,0)}</span>
                </div>

                <div className='space-y-1'>
                    <p className='text-[12px] text-[#8A92A0]'>Calories</p>
                    <span className='font-(family-name:-font-oswald) text-[36px] font-bold text-[#ffffff]'>{calories.reduce((acc, item) => {
                        return acc+item
                    } ,0)}</span>
                </div>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box bg-transparent mt-8">
                <input type="radio" name="my_tabs_6" className="tab text-[12px]" aria-label="Today's Plan" defaultChecked />
                <div className="tab-content mt-6 space-y-4">
                    {plan.length > 0 ?
                    plan.map(planItem => <PlanCard key={planItem.id} planItem={planItem}></PlanCard>) :
                    
                    <div className='py-25 text-center'>
                        <h4 className='font-(family-name:--font-oswald) text-[20px] font-bold'>NOTHING HERE YET</h4>
                        <p className='mt-2 text-[12px] text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>

                        <Link href='/workout'>
                        <button className='btn py-3 px-6 rounded-4xl bg-[#CCFF00] text-[12px] font-semibold text-[#000000] mt-6'>Go to workout</button>
                        </Link>
                    </div>

                    }
                </div>




                <input type="radio" name="my_tabs_6" className="tab text-[12px]" aria-label="Saved" />
                <div className="tab-content mt-6 space-y-4">
                    {
                    save.length > 0 ?
                    save.map(SaveItem => <SaveCard key={SaveItem.id} SaveItem={SaveItem}></SaveCard>)
                    :

                    <div className='py-25 text-center'>
                        <h4 className='font-(family-name:--font-oswald) text-[20px] font-bold'>NOTHING HERE YET</h4>
                        <p className='mt-2 text-[12px] text-[#A1A1AA]'>Browse the library and add a lift to get today moving.</p>

                        <Link href='/workout'>
                        <button className='btn py-3 px-6 rounded-4xl bg-[#CCFF00] text-[12px] font-semibold text-[#000000] mt-6'>Go to workout</button>
                        </Link>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyPlan;