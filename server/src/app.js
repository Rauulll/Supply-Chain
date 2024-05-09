const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(bodyParser.json())

require('./routes')(app)

const server = app.listen(config.port)
console.log(`Server started on port ${config.port}`)

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})
