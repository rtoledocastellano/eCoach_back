const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    }
  },
  telephone: {
    type: String
  },
  birthDate: {
    type: Date
  },
  goal: {
    type: String,
    enum: ['Perder Peso', 'Mantener Peso', 'Aumentar Masa']
  },
  trainer: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: [true, 'User is required']
  },
  createdAt: {
    type: Date,
    default: Date.now() // Get a timestamp :)
  }
})

const customerModel = mongoose.model('customer', customerSchema)
module.exports = customerModel
