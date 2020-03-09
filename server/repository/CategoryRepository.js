const categorySchema = require('../schema/CategorySchema')
const mongoose = require('mongoose')

const categoryRepository = mongoose.model('Category', categorySchema)

module.exports = categoryRepository
