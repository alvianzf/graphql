var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema

var schema = buildSchema(`
            type Query {
                message: String
            }`);

// Root resolver
var root = {
            message: () => "hello world"
            };

// create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
        schema: schema,
        rootValue: root,
        graphiql: true
}));

app.listen(4000, () => console.log('Running on localhost:4000'));