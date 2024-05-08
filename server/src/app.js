const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
// const { config } = require('./models')
const config = require('./config/config')
// const db = require('./models/index')

const app = express()
app.use(morgan('combined'))
app.use(cors({
  origin: 'http://localhost:5174'
}))
app.use(bodyParser.json())

require('./routes')(app)

app.listen(config.port)
