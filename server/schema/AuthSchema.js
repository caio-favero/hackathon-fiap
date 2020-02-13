const { Schema } = require('mongoose')

const AuthSchema = new Schema({
  password: String,
  email: String,
  phoneNumber: String,
}, { versionKey: false })

module.exports = AuthSchema
