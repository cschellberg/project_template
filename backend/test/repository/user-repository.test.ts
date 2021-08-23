import {UserRepository} from "../../src/repository/user-respository";
import {Injector} from "@sailplane/injector";
import {User} from "../../src/models/user/user-models";

describe("user repository test",()=>{

    let userRepository:UserRepository|undefined;
    beforeAll(()=>{
        userRepository=Injector.get(UserRepository);
    })
    it("user repository test",async ()=>{
        if ( userRepository) {
            const testFirstName = "john";
            const testLastName = "doe";
            const testEmail = "johnDoe@gmail.com";
            const user: User = {
                firstName: testFirstName,
                lastName: testLastName,
                email: testEmail
            }
            await userRepository.addUser(user);
            let users: User[] = await userRepository.getUsers();
            const usersLength = users.length;
            expect(usersLength).toBeGreaterThan(0);
            const retrievedUser: User|undefined = users.find(user => user.email === testEmail);
            expect(retrievedUser).not.toBeUndefined();
            if ( retrievedUser) {
                expect(retrievedUser.firstName).toEqual(testFirstName);
                expect(retrievedUser.lastName).toEqual(testLastName);
                await userRepository.deleteUser(retrievedUser.id);
            }
            users = await userRepository.getUsers();
            expect(users.length).toEqual(usersLength - 1);
        }else{
            fail("UserRepository not initialized");
        }
    })
})