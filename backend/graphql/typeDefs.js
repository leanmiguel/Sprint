const { gql } = require("apollo-server")

module.exports = {
  typeDefs: gql`
    type User {
      id: ID
      name: String!
    }
    type Task {
      task: String!
      completed: Boolean!
    }
    type WorkSession {
      name: String!
      duration: Int!
    }
    type Project {
      name: String!
      tasks: [Task!]
      workSessions: [WorkSession!]
    }
    type Query {
      getUsers: [User!]
      getProjects(id: ID): [Project!]
    }
    type Mutation {
      addUser(name: String!): User!
      updateUser(name: String!, id: ID!): User!
      deleteUser(id: ID!): User!
    }
  `,
}
