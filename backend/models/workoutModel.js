const mongoose = require('mongoose')

//We need to declare schema 
const Schema = mongoose.Schema

//Creates a new schema for us
//Defines the structure of the workout collection
const workoutSchema = new Schema({

    title: {
        type: String,
        required: true

    },

    set: {
        type: Number,
        required: true
    },

    rep: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    note: {
        type: String
    } 

},

    {timestamps: true})


//Model 

module.exports = mongoose.model('Workout', workoutSchema)