const { gql } = require("apollo-server")

module.exports = {
  typeDefs: gql`
    type User {
      id: ID
      name: String
    }
    type Query {
      users: [User]
    }
    type Mutation {
      addUser(name: String!): User!
      updateUser(name: String!, id: ID!): User!
      deleteUser(id: ID!): User!
    }
  `,
}
