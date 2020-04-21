// setup
require("dotenv").config();

//graphql setup

const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type User {
    id: ID
    name: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(name: String!): User!
  }
`;

// postgres setup
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

const getUsers = async () => {
  const info = await client.query("SELECT * FROM users");
  return info.rows;
};

const resolvers = {
  Query: {
    users: getUsers,
  },
  Mutation: {
    addUser: async (parent, args) => {
      const pgQuery = {
        text: "INSERT INTO users(name) VALUES($1) RETURNING *",
        values: [args.name],
      };
      const info = await client.query(pgQuery);
      return info.rows[0];
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
