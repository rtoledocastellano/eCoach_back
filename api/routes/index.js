const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const customerRouter = require('./customer.router')
const appointmentRouter = require('./appointment.router')
const { authUser } = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/customers', authUser, customerRouter)
router.use('/appointments', authUser, appointmentRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
