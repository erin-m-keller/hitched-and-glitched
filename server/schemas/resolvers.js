// initialize variables
const { User } = require('../models'),
      { generateAuthToken } = require("../utils/auth"),
      { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  // retrieve data from the server
  Query: {
    // TODO: ADD QUERIES HERE
    
  },
  // modify data on the server
  Mutation: {
    // create a new user on sign up
    createUser: async (_,{loginData}) => {
      // initialize variables
      const user = await User.create(loginData),
            token = generateAuthToken(user);
      // return token and user object
      return { token, user };
    },
    // authenticate the user
    login: async (_, { email, password }) => {
      // initialize variables
      const user = await User.findOne({ email });
      // if user is not found, or password is incorrect, throw an authentication error
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError("Incorrect credentials.");
      }
      // generate a token for the authenticated user
      const token = generateAuthToken(user);
      // return the token and user object
      return { token, user };
    },
  },
};

// export the resolvers
module.exports = resolvers;
