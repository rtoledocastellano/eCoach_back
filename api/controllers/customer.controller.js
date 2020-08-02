const CustomerModel = require('../models/customer.model')
const { handleError } = require('../utils')

module.exports = {
  addCustomer,
  getCustomer,
  getCustomerByTrainer,
  updateCustomer,
  searchCustomerByName
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
  CustomerModel
    .find({ name: req.body })
    .then(users => {
      res.json(users)
    })
}
