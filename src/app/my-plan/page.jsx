'use client';

import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../context/workoutcontext';
import PlanCard from '../components/PlanCard';
import SaveCard from '../components/SaveCard';
import Link from 'next/link';

const MyPlan = () => {
    const { plan, save } = useContext(WorkoutContext);

    const [sortBy, setSortBy] = useState('duration');

    const time = plan.map(item => item.duration);
    const calories = plan.map(item => item.caloriesBurned);

    const getSortedPlan = () => {
        if (sortBy === 'duration') {
            return [...plan].sort((a, b) => b.duration - a.duration);
        }

        if (sortBy === 'calories') {
            return [...plan].sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        }

        if (sortBy === 'rating') {
            return [...plan].sort((a, b) => b.rating - a.rating);
        }

        return plan;
    };


    const getSortedSave = () => {
        if (sortBy === 'duration') {
            return [...save].sort((a, b) => b.duration - a.duration);
        }

        if (sortBy === 'calories') {
            return [...save].sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }

        if (sortBy === 'rating') {
            return [...save].sort((a, b) => b.rating - a.rating);
        }

        return save;
    };

    return (
        <div className="container mx-auto">

            <div className="space-y-2">
                <h1 className="font-(family-name:--font-oswald) text-[30px] font-bold uppercase">
                    My Plan
                </h1>

                <p className="text-[14px] text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="border border-[#232732] rounded-2xl p-6 mt-6 grid grid-cols-3">

                <div className="space-y-1">
                    <p className="text-[12px] text-[#8A92A0]">
                        Exercises
                    </p>

                    <span className="font-(family-name:-font-oswald) text-[28px] md:text-[36px] font-bold text-[#CCFF00]">
                        {plan.length}
                    </span>
                </div>

                <div className="space-y-1">
                    <p className="text-[12px] text-[#8A92A0]">
                        Minutes
                    </p>

                    <span className="font-(family-name:-font-oswald) text-[28px] md:text-[36px] font-bold text-[#ffffff]">
                        {time.reduce((acc, item) => acc + item, 0)}
                    </span>
                </div>

                <div className="space-y-1">
                    <p className="text-[12px] text-[#8A92A0]">
                        Calories
                    </p>

                    <span className="font-(family-name:-font-oswald) text-[28px] md:text-[36px] font-bold text-[#ffffff]">
                        {calories.reduce((acc, item) => acc + item, 0)}
                    </span>
                </div>

            </div>

            <div className="mt-8">

                <div className="flex justify-end items-center gap-3">

                    <p className="text-[#8A92A0] text-[12px]">
                        Sort By
                    </p>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="select max-w-40"
                    >
                        <option value="duration">
                            Duration
                        </option>

                        <option value="calories">
                            Calories
                        </option>

                        <option value="rating">
                            Rating
                        </option>
                    </select>

                </div>

                <div className="tabs tabs-box bg-transparent -mt-10">

                    {/* Today's Plan */}

                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab text-[12px]"
                        aria-label="Today's Plan"
                        defaultChecked
                    />

                    <div className="tab-content mt-6 space-y-4">

                        {plan.length > 0 ? (

                            getSortedPlan().map((planItem) => (
                                <PlanCard
                                    key={planItem.id}
                                    planItem={planItem}
                                />
                            ))

                        ) : (

                            <div className="py-25 text-center">

                                <h4 className="font-(family-name:--font-oswald) text-[20px] font-bold">
                                    NOTHING HERE YET
                                </h4>

                                <p className="mt-2 text-[12px] text-[#A1A1AA]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href="/#library">
                                    <button className="btn py-3 px-6 rounded-4xl bg-[#CCFF00] text-[12px] font-semibold text-[#000000] mt-6">
                                        Go to workout
                                    </button>
                                </Link>

                            </div>
                        )}

                    </div>


                    {/* Saved */}

                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab text-[12px]"
                        aria-label="Saved"
                    />

                    <div className="tab-content mt-6 space-y-4">

                        {save.length > 0 ? (

                            getSortedSave().map(SaveItem => (
                                <SaveCard
                                    key={SaveItem.id}
                                    SaveItem={SaveItem}
                                />
                            ))

                        ) : (

                            <div className="py-25 text-center">

                                <h4 className="font-(family-name:--font-oswald) text-[20px] font-bold">
                                    NOTHING HERE YET
                                </h4>

                                <p className="mt-2 text-[12px] text-[#A1A1AA]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href="/#library">
                                    <button className="btn py-3 px-6 rounded-4xl bg-[#CCFF00] text-[12px] font-semibold text-[#000000] mt-6">
                                        Go to workout
                                    </button>
                                </Link>

                            </div>
                        )}

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MyPlan;