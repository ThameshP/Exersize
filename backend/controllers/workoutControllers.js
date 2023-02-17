const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//Function to get all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}



//Function to get a single workout

const getOneWorkout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: 'no such workout'})
    
}
res.status(200).json(workout)
}



//Function to create new workout

const createWorkout = async (req, res) => {
        const {title, set, rep, weight, note} = req.body

    try{
        //Workout is the const from requiring the workoutModel js file after exporting it.
        //a document is created with four properties of title, rep, weight, and note.
        const workout = await Workout.create({title, set, rep, weight, note})
        //response is the workout document created above ^
        res.status(200).json(workout)
    } catch (error) {
        //response status 400 is an error code
        res.status(400).json({error: error.message})
    }
}




//Function to delete a single workout

const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

        if (!workout){
        return res.status(404).json({error: 'no such workout'})
    }

    res.status(200).json(workout)
}


//Function to update a new workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body


    })
        if (!workout){
        return res.status(404).json({error: 'no such workout'})
    }
    
    res.status(200).json(workout)
}


module.exports = {
    
createWorkout,
getWorkouts,
getOneWorkout,
deleteWorkout,
updateWorkout,


}