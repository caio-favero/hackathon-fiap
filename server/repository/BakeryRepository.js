const bakerySchema = require('../schema/BakerySchema')
const mongoose = require('mongoose')

const bakeryRepository = mongoose.model('Bakery', bakerySchema)

module.exports = bakeryRepository
