const { gql } = require('apollo-server');

module.exports = {
  typeDefs: gql`
    type User {
      id: ID!
      uid: String!
      name: String!
      projects: [Project!]
    }
    type Task {
      task: String!
      completed: Boolean
    }
    type WorkSession {
      name: String!
    }
    type Project {
      name: String!
      description: String
      tasks: [Task!]
      workSessions: [WorkSession!]
    }
    type Query {
      getUser(id: String!): User!
    }
    type Mutation {
      addProject(userId: String!, name: String!, description: String): Project!
      addUser(id: String!, name: String!): User!
    }
  `,
};
