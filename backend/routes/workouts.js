const express = require('express') 
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getOneWorkout,
    getWorkouts,

} = require('../controllers/workoutControllers')

const router = express.Router()

//Getting all workouts
router.get('/', getWorkouts)

//Getting a SINGLE workout
router.get('/:id', getOneWorkout)

//Posting a new workout
router.post('/', createWorkout)

//Deleting a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a new workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a new workout'})
})

module.exports = router