//  require express package
const express = require('express')

//  creates instance of the router for us
const router = express.Router()

/*  Handler
router.get('/', () => {})   //some sort of function when the get request comes in. forward slash is the endpointits looking for
                            //if its '/hello' when someone goes to /api/workouts/hello, the function would trigger
*/

//  Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

//  GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//  POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//  DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//  UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

//  export the router
module.exports = router