const router = require('express').Router()
const controller = require('../controller/AuthController')

router.get('/', controller.get)
router.post('/', controller.post)

module.exports = router
