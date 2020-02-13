const router = require('express').Router()
const controller = require('../controller/SubscriptionController')

router.get('/', controller.get)
router.post('/', controller.post)

module.exports = router
