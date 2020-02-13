const schema = require('../schema/AuthSchema')
const mongoose = require('mongoose')

const repository = mongoose.model('Auth', schema)

module.exports = repository
