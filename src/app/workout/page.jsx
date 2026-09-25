import React from 'react';
import FitnessCard from '../components/fitnessCard';

const WorkOut = async() => {


    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const fitData = await res.json();

  const {id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions} = fitData

    return (
        <div className='container mx-auto'>
            <div className="container mx-auto space-y-8.25">
            
                  <div className="flex flex-col gap-1">
                    <h2 className="font-(family-name:--font-oswald) font-bold text-[30px] uppercase">The Library</h2>
                    <p className="text-[14px] text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
                  </div>
            
                  
                  <div className="grid grid-cols-3 gap-6.25">
                    {
                      fitData.map(fitItem => <FitnessCard key={fitItem.id} fitItem = {fitItem}></FitnessCard>)
                    }
                  </div>
            
            
                </div>
        </div>
    );
};

export default WorkOut;