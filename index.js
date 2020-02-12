global.config = require('config')
console.log(config)

const app = require('./server/app')
const port = app.get('port')

app.listen(port, () => console.log(`Server up on port ${port}`))

module.exports = app
