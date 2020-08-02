const router = require('express').Router()

const {
  addCustomer,
  getCustomer,
  getCustomerByTrainer,
  updateCustomer
} = require('../controllers/customer.controller')

router.get('/', getCustomerByTrainer)
router.post('/', addCustomer)
router.get('/search')
router.get('/:id', getCustomer)
router.post('/:id', updateCustomer)

module.exports = router
