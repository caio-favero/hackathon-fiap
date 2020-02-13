const schema = require('../schema/DeliverymanSchema')
const mongoose = require('mongoose')

const repository = mongoose.model('Deliveryman', schema)

module.exports = repository
