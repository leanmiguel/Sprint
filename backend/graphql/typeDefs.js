const { gql } = require('apollo-server');

module.exports = {
  typeDefs: gql`
    type User {
      id: ID
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
      getUser: User!
    }
    type Mutation {
      addProject(userId: ID!, name: String!, description: String): Project!
    }
  `,
};
