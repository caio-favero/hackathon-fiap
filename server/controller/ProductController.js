const model = require('../repository/ProductRepository')
const categoryModel = require('../repository/CategoryRepository')

module.exports = {

  get(request, response, next) {
    model.find({})
      .populate('category')
      .then(res => {
        console.log(res)
        response.json(res)
      })
  },

  post(request, response, next) {
    model.create(request.body)
      .then(res => response.json(res))
  },

  put(request, response, next) {
    model.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(res => {
        response.json(res)
      })
  },



}
