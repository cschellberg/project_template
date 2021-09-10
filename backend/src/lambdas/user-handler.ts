import {APIGatewayEvent, APIGatewayProxyResult} from "aws-lambda";
import {Injector} from "@sailplane/injector";
import {UserService} from "../service/user-service";
import {User} from "../models/user/user-models";


const userService=Injector.get<UserService>(UserService);


export const getUsers = async (_event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    const users=await userService.getUsers();
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(users),
    };
    return response;
}

export const addUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    const user:User=JSON.parse(event.body) as User;
    await userService.addUser(user);
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: "SUCCESS",
    };
    return response;
}

export const deleteUser = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    const email=event.pathParameters.email;
    await userService.deleteUser(email);
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: "SUCCESS",
    };
    return response;
}