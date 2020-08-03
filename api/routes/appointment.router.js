const router = require('express').Router()

const {
  getAppointments
} = require('../controllers/appointment.controller')

router.get('/', getAppointments)

module.exports = router
