const { Schema } = require('mongoose')

const DeliverymanSchema = new Schema({
  name: String,
  image: String,
}, { versionKey: false })

module.exports = DeliverymanSchema
