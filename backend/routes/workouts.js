const express = require('express') 
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getOneWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,

} = require('../controllers/workoutControllers')

const router = express.Router()

//Getting all workouts
router.get('/', getWorkouts)

//Getting a SINGLE workout
router.get('/:id', getOneWorkout)

//Posting a new workout
router.post('/', createWorkout)

//Deleting a new workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router