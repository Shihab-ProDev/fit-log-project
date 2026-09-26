import { Suspense } from "react";
import Banner from "./components/banner";
import FitnessCard from "./components/fitnessCard";
import FitnessLibrarySkeleton from "./components/FitnessLibrarySkeleton";


export default async function Home() {


  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const fitData = await res.json();

  const { id, name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, reps, rating, description, instructions } = fitData

  return (
    <div>
      <Banner></Banner>


      <div id="library" className="mt-16 container mx-auto space-y-8.25">

        <div className="flex flex-col gap-1">
          <h2 className="font-(family-name:--font-oswald) font-bold text-[30px] uppercase">The Library</h2>
          <p className="text-[14px] text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
        </div>

        <Suspense fallback={<FitnessLibrarySkeleton />}>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6.25">
            {
              fitData.map(fitItem => <FitnessCard key={fitItem.id} fitItem={fitItem}></FitnessCard>)
            }
          </div>


        </Suspense>
      </div>

    </div>
  );
}
