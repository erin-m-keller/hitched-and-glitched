// initialize variables
const { gql } = require('apollo-server-express');

// define the GraphQL type definitions
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }
  input CreateUserInput {
    username: String!
    email: String!
    password: String!
  }
  type Auth {
    token: String!
    user: User!
  }  
  type Query {
    hello: String # Placeholder query
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

// export typedefs
module.exports = typeDefs;
