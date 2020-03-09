const mongoose = require('mongoose')
const mongooseConfig = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
const { user, password, uri, name, } = config.database

const connectionStr = `mongodb://${user ? user + ':' + password + '@' : ''}${uri}/${name}`

mongoose.connect(connectionStr, mongooseConfig)
mongoose.connection.on('error', err => {
  console.error(err)
  mongoose.connect(connectionStr, mongooseConfig)
})
mongoose.connection.once('open', () => console.log('connected to mongodb'))
mongoose.connection.on('disconnected', data => {
  console.error(`MongoDB diconnected:  ${connectionStr} -> ${data}`)
  mongoose.connect(connectionStr, mongooseConfig)
})
