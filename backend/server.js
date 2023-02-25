//nodemon server.js to run on localhost:4000
//mongodb -> thameshprittipaul -> UAkrZh6zYrGKcIev

require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//Creates an express app, stored in this constant
const app = express()

//Middleware
//Looks to see if their body in the json req
app.use(express.json())

//Fixing CORS
app.use('/api/workouts', (req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
})

const cors = require("cors");
app.use(cors());

//Gives us the ability to console log the request path and method
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes - Grabs all the routes from './routes/workouts'
app.use('/api/workouts/', workoutRoutes)

//Database connection using Mongoose
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(4000, () => {
        console.log('listening on port 4000 and database connected')
        })
    })

    .catch((error) => {
        console.log(error)
    })


//Listen for requests -> PORT=4000 from .env file
// app.listen(process.env.PORT, () => {
//     console.log('listening on port 4000')
// })

