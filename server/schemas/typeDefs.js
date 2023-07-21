// initialize variables
const { gql } = require('apollo-server-express');

// define the GraphQL type definitions
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedPlaces:[Place] 
    placeCount: Int
  }
  type Place {
    location: String!
    address: String!
    guestCapacity: Int!
    contactNumber: String!
    description: String!
  }
  input CreateUserInput{
    username: String!
    email: String!
    password: String!
  }
  type Auth {
    token: ID!
    user: User!
  }  

  type Query {
    hello: String # Placeholder query
  }
  type Mutation {
    createUser(loginData:CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;

// export typedefs
module.exports = typeDefs;
