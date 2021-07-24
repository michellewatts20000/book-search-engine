const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    name: String!
    username: String!
    savedBooks: String
  }

  type Book {
    _id: ID!
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
  }

  type Mutation {
   login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User 
  }
  
type Auth {
    token: ID!
    user: User
  }

`;



module.exports = typeDefs;