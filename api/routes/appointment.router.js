const router = require('express').Router()

const {
  getCoachAppointments,
  getAppointment,
  updateCustomerAppointment
} = require('../controllers/appointment.controller')

router.get('/', getCoachAppointments)
router.get('/:id', getAppointment)
router.post('/:id', updateCustomerAppointment)

module.exports = router
