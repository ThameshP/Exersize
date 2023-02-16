const express = require('express') 
const router = express.Router()


//Getting all workouts
router.get('/', (req, res) => {
 res.json({mssg: 'GET all workouts'})

})

//Getting a SINGLE workout
router.get('/:id', (req, res) => {
 res.json({mssg: 'Get a single workout'})

})

//Posting a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//Deleting a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a new workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a new workout'})
})

module.exports = router