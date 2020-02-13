const model = require('../repository/UserRepository')

module.exports = {

  get(request, response, next) {
    model.find({})
      .then(res => {
        console.log(res)
        response.json(res)
      })
  },

  post(request, response, next) {
    model.create(request.body)
      .then(res => {
        response.json(res)
      })
  },

}
