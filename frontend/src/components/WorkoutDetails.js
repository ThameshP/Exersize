import React from 'react'

function WorkoutDetails({workout}) {
  return (
    <div className='workout-details'>
        <h4>{WorkoutDetails.title}</h4>
        <p><strong>Load (kg): </strong></p>
        <p><strong>Reps: </strong></p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails