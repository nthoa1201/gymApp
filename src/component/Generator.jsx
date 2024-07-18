import {SectionWrapper} from './SectionWrapper.jsx';
import {SCHEMES, WORKOUTS} from '../utils/swoldier.js';
import {useState} from 'react';


export const Header = (props) => {
    const {index, title, description} = props
    return (
        <div className="flex flex-col  gap-4" >
            <div className="flex items-center justify-center gap-2" >
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400" >{index}</p >
                <h4 className="text-xl sm:text-2xl md:text-3xl" >{title}</h4 >
            </div >
            <p className="text-sm sm:text-base mx-auto " >{description}</p >
        </div >
    )
}

export const Generator = () => {
    const [showModal, setShowModal] = useState(false);
    const [poison, setPoison] = useState('individual');
    const [muscles, setMuscles] = useState([]);
    const [goals, setGoals] = useState('strength_power');
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const updateMuscle = (muscleGroup) => {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return;
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return;
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }
    return (
        <SectionWrapper
            header={"generate your workout"}
            title={['It\'s', 'Huge', 'o\'clock']} >

            <Header
                index={'01'}
                title={'Pick your poison'}
                description={'Selected the workout you wish to endure'} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4" >
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button
                            onClick={() => {
                                setMuscles([])
                                setPoison(type)
                            }}
                            className={"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " + (type === poison ? 'border-blue-600' : 'border-blue-400')}
                            key={typeIndex} >
                            <p className="capitalize" >{type.replaceAll('_', ' ')}</p >
                        </button >
                    )
                })}
            </div >

            <Header
                index={'02'}
                title={'Lock on target'}
                description={'Selected the muscles judged  for annihilation.'} />
            <div className="bg-slate-950  border border-solid  border-blue-400 rounded-lg flex flex-col" >
                <button
                    onClick={toggleModal}
                    className="relative flex p-3 items-center justify-center" >
                    <p className="capitalize" >{muscles.length === 0 ? 'Select muscles groups' : muscles.join(' ')}</p >
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2" ></i >
                </button >
                {showModal && (
                    <div className="flex flex-col px-3 pb-4 duration-400" >
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclesGroup, musclesGroupIndex) => {
                            return (
                                <button
                                    key={musclesGroupIndex}
                                    className={"hover:text-blue-400 duration-200 " + (muscles.includes(musclesGroup) ? ' text-blue-400' : '')}
                                    onClick={() => {
                                        updateMuscle(musclesGroup)
                                    }} >
                                    <p className="uppercase py-1" >
                                        {musclesGroup.replaceAll('_', ' ')}
                                    </p >
                                </button >
                            )
                        })}
                    </div >
                )}
            </div >

            <Header
                index={'03'}
                title={'Become Juggernaut'}
                description={'Selected your ultimate objected'} />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4" >
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button
                            onClick={() => {
                                setGoals(scheme)
                            }}
                            className={"bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 " + (scheme === goals ? 'border-blue-600' : 'border-blue-400')}
                            key={schemeIndex} >
                            <p className="capitalize" >{scheme.replaceAll('_', ' ')}</p >
                        </button >
                    )
                })}
            </div >
        </SectionWrapper >
    )
}