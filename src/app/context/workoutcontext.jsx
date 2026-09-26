'use client';
import { createContext, useState } from "react";



export const WorkoutContext = createContext({});

const WorkOutProvider = ({children}) => {


    const [plan, setPlan] = useState([]);
    const [save, setSave] = useState([]);

    const sharedvalue = {
        plan,
        setPlan,
        save,
        setSave
    }

    return (
        <WorkoutContext.Provider value={sharedvalue}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkOutProvider;