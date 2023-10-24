require('dotenv').config()

const express = require('express')
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
app.use('/api/workouts', workoutRoutes) // attaches all those routes attached to router from workouts.js to 'app'

/* just testing the API
app.get('/', (req, res) => {
    res.json({mssg:'Welcome to the app'})
})
*/

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})

process.env