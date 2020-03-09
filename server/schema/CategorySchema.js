const { Schema, Types } = require('mongoose')

const CategorySchema = new Schema({
  name: String,
  description: String,
}, { versionKey: false })

module.exports = CategorySchema
