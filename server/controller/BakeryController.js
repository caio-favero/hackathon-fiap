const model = require('../repository/BakeryRepository')

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


/*
Padarias - bakery
Clientes - users
Assinaturaas - subscription

Entregadores - deliveryman
Transacoes - transactions
auth

*/
