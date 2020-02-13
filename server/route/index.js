const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/bakery', require('./bakery'))
router.use('/deliveryman', require('./deliveryman'))
router.use('/subscription', require('./subscription'))
router.use('/transaction', require('./transaction'))
router.use('/user', require('./user'))

module.exports = router
