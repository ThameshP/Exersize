import { useEffect} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

const Home = () =>{

    const {workouts, dispatch} = useWorkoutsContext()
 
    //Needs to be fired once when rendered
    //Having on empty array dependency tells us that it will only be fired once.
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
        const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            
            <div className= "workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout= {workout} />
                ))}
            </div>
        </div>
    )

}

export default Home