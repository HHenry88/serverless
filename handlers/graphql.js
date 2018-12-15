"use strict";

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require("graphql");

const myGreeting = fN => `Hello, ${fN}. We're using Graphql`;

const newSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "AnyName",
    fields: {
      greeting: {
        args: {
          firstName: {
            name: "firstName",
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        type: GraphQLString,
        resolve: (parent, args) => {
          return myGreeting(args.firstName);
        }
      }
    }
  })
});
