const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
    message: () => "Hello World!!"
}

// Create an express server and a GraphQL endpoint
const app = express();
app.use("/graphql", express_graphql({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Express GraphQL Server Running on http://localhost:4000")
});