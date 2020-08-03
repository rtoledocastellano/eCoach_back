const AppointmentModel = require('../models/appointment.model')
const { handleError } = require('../utils')

module.exports = {
  getAppointments
}

function getAppointments (req, res) {
  AppointmentModel
    .find({ trainer: res.locals.user._id })
    .populate('customer')
    .then(appoinment => {
      res.json(appoinment)
    })
}
