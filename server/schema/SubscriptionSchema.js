const { Schema } = require('mongoose')

const SubscriptionSchema = new Schema({
  name: String,
  image: String,
}, { versionKey: false })

module.exports = SubscriptionSchema
