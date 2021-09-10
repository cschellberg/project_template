import {UserService} from '../service/user-service'
import {ApolloServer, gql}  from 'apollo-server-lambda';
import {Injector} from "@sailplane/injector";
import {APIGatewayProxyCallback, APIGatewayProxyEvent, Context} from "aws-lambda";

const userService=Injector.get<UserService>(UserService);

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
type User {
    firstName: String
    lastName: String
    email: String
},
input UserInput {
    firstName: String
    lastName: String
    email: String
},
type Query {
    getUsers: [User]
},
type Mutation {
    addUser(user: UserInput):String
    deleteUser(email: String):String
}`;


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        getUsers: () => {return userService.getUsers()},
    },
    Mutation:{
        addUser:(_parent:any, variables:any)=>userService.addUser(variables?.user),
        deleteUser:(_parent:any, variables:any )=>userService.deleteUser(variables?.email)
    }
};

// Construct a schema, using GraphQL schema language
console.log("good up to here 1");
let tmpServer;
try {
    tmpServer = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (error) => {
            console.log(`GQL error ${error}`);
            return error;
        }
    });
}catch(err){
    console.log(`Unable to initialize server because ${err}`)
}

export const server=tmpServer;

console.log("good up to here 2");
const apolloServerHandler=server.createHandler();

exports.graphqlHandler = (
    event: APIGatewayProxyEvent,
    context: Context,
    callback: APIGatewayProxyCallback
): void => {
    console.log('EVENT',JSON.stringify(event));
    try {
        apolloServerHandler(event, context, callback);
    }catch(err){
        console.log(`Error handling gql request ${err}`);
    }
};

