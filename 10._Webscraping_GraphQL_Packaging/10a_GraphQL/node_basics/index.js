import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Define the schema
const schema = buildSchema(`
type Query {
  hello: String
  user(id: Int!): User
  post(id: Int!): Post
}
type Mutation {
  setMessage(message: String): String
}
type Message {
  message: String
}
type User {
  id: Int
  name: String
  email: String
}
type Post {
  id: Int
  title: String
  content: String
}
`);

let message = 'Hello, world!';

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

let posts = [
  { id: 1, title: 'Post 1', content: 'Content 1' },
  { id: 2, title: 'Post 2', content: 'Content 2' },
];

const root = {
  hello: () => {
    return message;
  },
  setMessage: ({ message: newMessage }) => {
    message = newMessage;
    return message;
  },
  user: ({ id }) => {
    return users.find(user => user.id === id);
  },
  post: ({ id }) => {
    return posts.find(post => post.id === id);
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server is running on http://localhost:4000/graphql'));
