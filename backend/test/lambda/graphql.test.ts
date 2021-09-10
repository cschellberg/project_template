import {server} from "../../src/lambdas/graphql";
import {gql} from 'apollo-server-lambda';
import {User} from "../../src/models/user/user-models";
import {convertArray} from "../../src/utils/object-converter";

describe("graphql test", () => {

    it("graphql test", async () => {
        const testFirstName = "john";
        const testLastName = "doe";
        const testEmail = "johnDoe@gmail.com";
        const user: User = {
            firstName: testFirstName,
            lastName: testLastName,
            email: testEmail
        }
        const addUserMutation = gql`
        mutation addUser($user: UserInput){
    addUser(user: $user)
    }
    `
        const request1 = {query: addUserMutation, variables: {user: user}}
        let response = await server.executeOperation(request1)
        expect(response.errors).toBeUndefined();
        const request2 = {query: "{getUsers{firstName lastName email}}"}
        response = await server.executeOperation(request2)
        expect(response.errors).toBeUndefined();
        const users: User[] = convertArray<User>(response.data?.getUsers);
        const retrievedUser: User | undefined = users.find(user => {
            return user.email === testEmail
        });
        const usersLength = users.length;
        expect(retrievedUser).not.toBeUndefined();
        if (retrievedUser) {
            expect(retrievedUser.firstName).toEqual(testFirstName);
            expect(retrievedUser.lastName).toEqual(testLastName);
            const deleteUserMutation = gql`
        mutation deleteUser($email: String){
    deleteUser(email: $email)
    }
    `
            const request3 = {query: deleteUserMutation, variables: {email: retrievedUser.email}}
            response = await server.executeOperation(request3)
            expect(response.errors).toBeUndefined();

            const request4 = {query: "{getUsers{firstName lastName email}}"}
            response = await server.executeOperation(request4)
            expect(response.errors).toBeUndefined();
            expect(response.data?.getUsers?.length).toEqual(usersLength - 1);
        } else {
            fail("Unable to return unit test user");
        }
        console.log("finished successfully ");
    });

    it("graphql initialization test", async () => {
        const handler=server.createHandler();
        expect(handler).toBeTruthy();
    });
});