const mongoose = require('mongoose')

const apointmentSchema = new mongoose.Schema({
  weight: {
    type: Number
  },
  fat: {
    type: Number
  },
  muscle: {
    type: Number
  },
  water: {
    type: Number
  },
  diet: {
    type: String
  },
  training: {
    type: String
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'customer'
  },
  trainer: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  }
})

const apointmentModel = mongoose.model('apointment', apointmentSchema)
module.exports = apointmentModel
