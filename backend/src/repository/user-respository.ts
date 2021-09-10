import {User} from "../models/user/user-models";
import {Injector} from "@sailplane/injector";
import {EnvConfig} from "../config/env.config";
import {
    DeleteItemCommand, DeleteItemCommandInput, DeleteItemCommandOutput,
    DynamoDBClient, PutItemCommand, PutItemCommandOutput,
    PutItemInput,
    QueryCommand,
    QueryCommandInput,
    QueryCommandOutput
} from "@aws-sdk/client-dynamodb";
import {marshall, unmarshall} from "@aws-sdk/util-dynamodb";

const options = {
    region: process.env.region || "us-east-1"
}

const client = new DynamoDBClient(options);

export class UserRepository {
    constructor(private readonly envConfig: EnvConfig) {
    }

    async deleteUser(email: string|undefined): Promise<User | null> {
        if ( !email ){
            return null;
        }
        const deleteItemInput: DeleteItemCommandInput = {
            TableName: this.envConfig.backendTableName(),
            Key: {
                pk: {S: `USER|${email}`},
                sk: {S: 'USER'}
            }
        }
        const command: DeleteItemCommand = new DeleteItemCommand(deleteItemInput);
        try {
            const response: DeleteItemCommandOutput = await client.send(command);
            if (response.Attributes) {
                return unmarshall(response.Attributes) as User;
            } else {
                return null;
            }
        } catch (error) {
            console.log(`Unable to retrieve users because ${error}`);
            throw error;
        }
    }

    async addUser(user: User): Promise<User | null> {
        const dbUser={
            ...user,
            pk:`USER|${user.email}`,
            sk:'USER'
        }
        const putItemInput: PutItemInput = {
            TableName: this.envConfig.backendTableName(),
            Item: marshall(dbUser),
        }
        const command: PutItemCommand = new PutItemCommand(putItemInput);
        try {
            const response: PutItemCommandOutput = await client.send(command);
            if (response.Attributes) {
                return unmarshall(response.Attributes) as User;
            } else {
                return null;
            }

        } catch (error) {
            console.log(`Unable to retrieve users because ${error}`);
            throw error;
        }
    }

    async getUsers(): Promise<Array<User>> {
        const queryInput: QueryCommandInput = {
            TableName: this.envConfig.backendTableName(),
            IndexName: "sort_key_index",
            KeyConditionExpression: 'begins_with(pk,:pk) and  sk = :sk',
            ExpressionAttributeValues: {
                ':sk': {S: 'USER'},
                ':pk': {S: 'USER'}
            }
        }
        const command: QueryCommand = new QueryCommand(queryInput);
        try {
            const response: QueryCommandOutput =  await client.send(command);
            if (response.Items) {
                return response.Items.map(item => unmarshall(item) as User);
            } else {
                return []
            }

        } catch (error) {
            console.log(`Unable to retrieve users because ${error}`);
            throw error;
        }
    }

}

Injector.register(UserRepository, [EnvConfig])