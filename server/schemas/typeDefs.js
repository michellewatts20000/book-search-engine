const {
    gql
} = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Books]
  }

  type Book {
    _id: ID!
    bookId: String
    authors: [Authors]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
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

`;



module.exports = typeDefs;