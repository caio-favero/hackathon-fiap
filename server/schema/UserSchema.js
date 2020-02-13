const { Schema } = require('mongoose')

const UserSchema = new Schema({
  givenName: String,
  familyName: String,
  fullName: String,
  picture: String,
  type: {
    type: String,
    enum: ['USER', 'DELIVERYMAN', 'BAKER']
  },
}, { versionKey: false })

module.exports = UserSchema
