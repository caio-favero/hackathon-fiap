
const app = require('express')()
// const controller = require('./controller/AppController')
const bodyParser = require('body-parser')
require('../config/mongoose.js')

app.set('port', process.env.PORT || config.port)

app.use(bodyParser.json())
app.use(require('./route'))

module.exports = app
