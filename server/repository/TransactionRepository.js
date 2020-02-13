const schema = require('../schema/TransactionSchema')
const mongoose = require('mongoose')

const repository = mongoose.model('Transaction', schema)

module.exports = repository
