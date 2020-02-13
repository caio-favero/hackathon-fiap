const { Schema, Types } = require('mongoose')

const TransactionSchema = new Schema({
  userId: Types.ObjectId,

}, { versionKey: false })

module.exports = TransactionSchema
