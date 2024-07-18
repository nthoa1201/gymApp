import {Hero} from './component/Hero.jsx';
import {Generator} from './component/Generator.jsx';
import {Workout} from './component/Workout.jsx';
import {useState} from 'react';
import {generateWorkout} from './utils/functions.js';

function App() {

    const [workout, setWorkout] = useState(null);
    const [poison, setPoison] = useState('individual');
    const [muscles, setMuscles] = useState([]);
    const [goals, setGoals] = useState('strength_power');
    const updatedWorkout = () => {
        if (muscles.length < 1) {
            return
        }
        let newWorkout = generateWorkout({poison, muscles, goals})
        console.log(newWorkout)
        setWorkout(newWorkout)

        window.location.href= '#workout'
    }

    return (
        <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base" >
            <Hero />
            <Generator
                poison={poison}
                muscles={muscles}
                goals={goals}
                setPoison={setPoison}
                setMuscles={setMuscles}
                setGoals={setGoals}
                updatedWorkout={updatedWorkout}
            />
            {workout && <Workout workout={workout} />}
        </main >
    )
}

export default App
