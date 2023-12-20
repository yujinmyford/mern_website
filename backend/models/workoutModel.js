const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Create schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    reps: {
        type: Number,
        required: true 
    },
    load: {
        type: Number,
        required: true
    }
// creates timetamp every time we create new schema (also updates everytime we update)
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)