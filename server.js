const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workoutRoutes')

const app = express()

app.use(express.json()) // Checks any request if its body contains data in JSON and automatically converts it into a JS object.

app.use('/api/workouts', workoutRoutes)

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`)
})
