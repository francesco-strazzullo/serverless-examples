const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', function (req, res) {
  res.send(`This is Serverless ${new Date()}`)
})

module.exports = app
