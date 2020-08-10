const AppointmentModel = require('../models/appointment.model')
const { handleError } = require('../utils')

module.exports = {
  getCoachAppointments,
  getAppointment,
  updateCustomerAppointment
}

function getCoachAppointments (req, res) {
  AppointmentModel
    .find({ trainer: res.locals.user._id })
    .populate('customer')
    .then(appoinment => {
      res.json(appoinment)
    })
}

function getAppointment (req, res) {
  AppointmentModel
    .findById(req.params.id)
    .populate('customer')
    .then(appoinment => {
      res.json(appoinment)
    })
}

function updateCustomerAppointment (req, res) {
  AppointmentModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then(appointment => {
      res.json(appointment)
    })
}
