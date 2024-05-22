import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Define the schema
const schema = buildSchema(`
type Query {
  hello: String
}
type Mutation {
  setMessage(message: String): String
}
type Message {
  message: String
}
`);

// Define a variable to store the message
let message = 'Hello, world!';

// Define the resolvers
const root = {
  hello: () => {
    return message;
  },
  setMessage: ({ message: newMessage }) => {
    message = newMessage;
    return message;
  },
};

// Set up the server
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Server is running on http://localhost:4000/graphql'));
