const router = require('express').Router();
const Workout = require('../models/workout');

// find all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// post a new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
        res.json(err)
    })
})

// router.get("/api/workouts", (req, res) => {
//     Workout.find()
//     .then()
// })

module.exports = router;