require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')//  can use object to connect to the db
//require that router we exported
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middle ware
app.use(express.json())// can now req body and other html elements 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes) //  attaches all those routes attached to router from workouts.js to 'app'

//connect to db
mongoose.connect(process.env.MONG_URI) //   asyncronous so it returns a promise
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port ', process.env.PORT)
        }) // we dont want to start listening for requests until we're connected so it goes in here now.
    }) //   fire a function when its complete
    .catch((error) => {
        console.log(error)
    }) //   catches anny error if there is one

/* just testing the API
app.get('/', (req, res) => {
    res.json({mssg:'Welcome to the app'})
})
*/

process.env