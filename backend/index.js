// setup
require("dotenv").config()
const { Model } = require("objection")

//graphql setup
var knex = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

// Model.knex(knex)

// const { ApolloServer } = require("apollo-server")
// const { resolvers } = require("./graphql/resolvers")
// const { typeDefs } = require("./graphql/typeDefs")

// const server = new ApolloServer({ typeDefs, resolvers })

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`)
// })

async function createSchema() {
  if (await knex.schema.hasTable("persons")) {
    return
  }

  // Create database schema. You should use knex migration files
  // to do this. We create it here for simplicity.
  await knex.schema.createTable("persons", (table) => {
    table.increments("id").primary()
    table.integer("parentId").references("persons.id")
    table.string("firstName")
  })
}

createSchema()
