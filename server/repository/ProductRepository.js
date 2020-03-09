const productSchema = require('../schema/ProductSchema')
const mongoose = require('mongoose')

const productRepository = mongoose.model('Product', productSchema)

module.exports = productRepository
