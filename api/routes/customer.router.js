const router = require('express').Router()

const {
  addCustomer,
  getCustomer,
  getCustomerByTrainer,
  updateCustomer,
  newAppointment,
  customerAppointments,
  updateCustomerAppointment,
  getAppointment,
  searchCustomerByName
} = require('../controllers/customer.controller')

router.get('/', getCustomerByTrainer)
router.post('/', addCustomer)
router.get('/search', searchCustomerByName)
router.get('/:id', getCustomer)
router.post('/:id', updateCustomer)
router.get('/:id/appointment', customerAppointments)
router.post('/:id/appointment', newAppointment)
router.get('/:id/appointment/:appointmentId', getAppointment)
router.post('/:id/appointment/:appointmentId', updateCustomerAppointment)

module.exports = router
