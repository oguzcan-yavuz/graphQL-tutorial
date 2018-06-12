const express = require('express')
const graphqlHTTP = require('express-graphql')
const logger = require('morgan')
const schema = require('./schema/schema.js')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(logger('dev'))

app.listen(4000, () => {
  console.log('Server is listening on port 4000')
})
