import {Injector} from "@sailplane/injector";
import {User} from "../../src/models/user/user-models";
import {UserService} from "../../src/service/user-service";

describe("user repository test", () => {

    let userService: UserService | undefined;
    beforeAll(() => {
        userService = Injector.get(UserService);
    })
    it("user service test", async () => {
        if ( userService) {
            const testFirstName = "john";
            const testLastName = "doe";
            const testEmail = "johnDoe@gmail.com";
            const user: User = {
                firstName: testFirstName,
                lastName: testLastName,
                email: testEmail
            }
            await userService.addUser(user);
            let users: User[] = await userService.getUsers();
            const usersLength = users.length;
            expect(usersLength).toBeGreaterThan(0);
            const retrievedUser: User | undefined = users.find(user => user.email === testEmail);
            expect(retrievedUser).not.toBeUndefined();
            if (retrievedUser) {
                expect(retrievedUser.firstName).toEqual(testFirstName);
                expect(retrievedUser.lastName).toEqual(testLastName);
                await userService.deleteUser(retrievedUser.email);
            }
            users = await userService.getUsers();
            expect(users.length).toEqual(usersLength - 1);
        }else{
            fail("UserService not initialized");
        }
    });
});