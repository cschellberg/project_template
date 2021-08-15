import {User} from "../models/user/user-models";
import {Injector} from "@sailplane/injector";


export class UserRepository {
    constructor() {
    }

    async addUser(user: User): Promise<void> {
        console.log(`adding user ${JSON.stringify(user)}`);
    }

    async getUsers(): Promise<Array<User>> {
        return [{
            firstName: "donald",
            lastName: "schellberg",
            email: "dschellberg@gmail.com"
        }, {
            firstName: "stephanie",
            lastName: "schellberg",
            email: "stephschell123@gmail.com"
        }
        ];
    }

}

Injector.register(UserRepository,[])