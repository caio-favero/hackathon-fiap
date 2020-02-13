const { Schema } = require('mongoose')


const productsSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  picture: String,
})

const BakerySchema = new Schema({
  name: String,
  address: {
    street: String
  },
  products: [productsSchema]
}, { versionKey: false })

module.exports = BakerySchema
