const CustomerModel = require('../models/customer.model')
const AppointmentModel = require('../models/appointment.model')
const { handleError } = require('../utils')

module.exports = {
  addCustomer,
  getCustomer,
  getCustomerByTrainer,
  updateCustomer,
  searchCustomerByName,
  newAppointment,
  customerAppointments,
  updateCustomerAppointment,
  getAppointment
}

function addCustomer (req, res) {
  CustomerModel
    .create({ trainer: res.locals.user._id, ...req.body })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getCustomer (req, res) {
  CustomerModel
    .find({ _id: req.params.id })
    .then(users => {
      res.json(users)
    })
}

function getCustomerByTrainer (req, res) {
  CustomerModel
    .find({ trainer: res.locals.user._id })
    .then(users => {
      res.json(users)
    })
}

function updateCustomer (req, res) {
  CustomerModel
    .findOneAndUpdate(req.params.id, req.body)
    .then(user => {
      res.json(user)
    })
}

function searchCustomerByName (req, res) {
  console.log(req.body)
  CustomerModel
    .find({ name: { $regex: req.body.name } })
    .then(users => {
      res.json(users)
    })
    .catch((err) => handleError(err, res))
}

function newAppointment (req, res) {
  console.log(req.body)
  AppointmentModel
    .create({ trainer: res.locals.user._id, ...req.body })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function customerAppointments (req, res) {
  AppointmentModel
    .find({ customer: req.params.id })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateCustomerAppointment (req, res) {
  AppointmentModel
    .findOneAndUpdate(req.params.appointmemtId, req.body)
    .then(appointment => {
      res.json(appointment)
    })
}

function getAppointment (req, res) {
  AppointmentModel
    .find({ appointment: req.params.appointmemtId })
    .then(appoinment => {
      res.json(appoinment)
    })
}
