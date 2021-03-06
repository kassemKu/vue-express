const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json)
app.use(cors())
const port = 3000

app.get('/status', (req, res) => {
  res.send({ message: 'Hello World' })
})

app.listen(port)
