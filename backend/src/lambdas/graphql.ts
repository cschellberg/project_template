import {UserService} from '../service/user-service'
import {ApolloServer, gql}  from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import {Injector} from "@sailplane/injector";
import {User} from "../models/user/user-models";

const userService=Injector.get<UserService>(UserService);
if ( !userService){
    throw new Error("Unable to load up user service");
}
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type User {
    firstName: String
    lastName: String
    email: String
    id?: String
},
  type Query {
    users: [User]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {

    Query: {
        users: () => userService.getUsers(),
    },
    Mutation:{
        addUser:(user:User)=>userService.addUser(user),
        deleteUser:(id:string )=>userService.deleteUser(id),
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers,

    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // install the Playground plugin and set the `introspection` option explicitly to `true`.
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});



exports.graphqlHandler = server.createHandler();