const { Schema, Types } = require('mongoose')

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  picture: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
}, { versionKey: false })

module.exports = ProductSchema
