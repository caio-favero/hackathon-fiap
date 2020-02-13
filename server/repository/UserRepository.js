const schema = require('../schema/UserSchema')
const mongoose = require('mongoose')

const repository = mongoose.model('User', schema)

module.exports = repository
