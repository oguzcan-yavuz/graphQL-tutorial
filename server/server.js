require('dotenv').load()
const express = require('express')
const graphqlHTTP = require('express-graphql')
const logger = require('morgan')
const mongoose = require('mongoose')
const schema = require('./schema/schema.js')
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 4000

const app = express()

// connect to the db
mongoose.connect(MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('Connected to the database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(logger('dev'))

app.listen(PORT, () => {
  console.log('Server is listening on port 4000')
})
