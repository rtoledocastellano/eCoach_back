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
    ref: 'customer',
    required: [true, 'Customer is required']
  },
  trainer: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: [true, 'Trainer is required']
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
