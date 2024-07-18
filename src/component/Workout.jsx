import {SectionWrapper} from './SectionWrapper.jsx';
import {ExerciseCard} from './ExerciseCard.jsx';

export const Workout = (props) => {
    const {workout} = props
    return (
        <SectionWrapper
            header={'generate your workout'}
            title={['The', 'Danger', 'zone']} >

            <div className="flex flex-col gap-4" >

            {workout.map((exercise, i) => {
                return (
                    <ExerciseCard index={i} key={i} exercise={exercise}/>
                )
            })}
            </div >

        </SectionWrapper >
    )
}