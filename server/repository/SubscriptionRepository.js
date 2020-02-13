const schema = require('../schema/SubscriptionSchema')
const mongoose = require('mongoose')

const repository = mongoose.model('Subscription', schema)

module.exports = repository
